import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CDN = "https://onecdn.io/media";
const ID = /^[a-f0-9-]{36}$/;

/**
 * Serves the client's existing photographs (hosted on her current website's CDN)
 * through the preview's own origin, resized and optionally cropped to a fixed ratio.
 * Query: w (width, max 2000) · ar (e.g. "4:5") · q (jpeg quality) · b64=1 (JSON, internal checks)
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!ID.test(id)) return new NextResponse("Bad id", { status: 400 });

  const sp0 = req.nextUrl.searchParams;
  const variant = (sp0.get("v") || "").replace(/[^a-z0-9_-]/gi, "");
  const path = variant ? `${CDN}/${id}/${variant}` : `${CDN}/${id}`;
  const upstream = await fetch(path, { cache: "force-cache" });
  if (!upstream.ok) return new NextResponse(`Upstream ${upstream.status} for ${path}`, { status: 502 });
  if (sp0.get("probe") === "1") {
    return NextResponse.json({
      path,
      status: upstream.status,
      contentType: upstream.headers.get("content-type"),
      length: upstream.headers.get("content-length"),
    });
  }

  const buf = Buffer.from(await upstream.arrayBuffer());
  const sp = req.nextUrl.searchParams;
  const w = Math.min(parseInt(sp.get("w") || "1600", 10) || 1600, 2000);
  const q = Math.min(parseInt(sp.get("q") || "82", 10) || 82, 95);
  const ar = sp.get("ar");

  let img = sharp(buf).rotate();
  const meta = await img.metadata();
  if (ar && /^\d+:\d+$/.test(ar) && meta.width && meta.height) {
    const [aw, ah] = ar.split(":").map(Number);
    const target = aw / ah;
    const cur = meta.width / meta.height;
    let cw = meta.width;
    let ch = meta.height;
    if (cur > target) cw = Math.round(meta.height * target);
    else ch = Math.round(meta.width / target);
    img = img.extract({
      left: Math.round((meta.width - cw) / 2),
      top: Math.round((meta.height - ch) * 0.25),
      width: cw,
      height: ch,
    });
  }
  const out = await img.resize({ width: w, withoutEnlargement: true }).jpeg({ quality: q, mozjpeg: true }).toBuffer();

  if (sp.get("b64") === "1") {
    return NextResponse.json({ id, width: meta.width, height: meta.height, bytes: out.length, b64: out.toString("base64") });
  }
  return new NextResponse(new Uint8Array(out), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
    },
  });
}
