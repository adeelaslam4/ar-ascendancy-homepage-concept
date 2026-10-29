import { EXISTING_SITE_IMAGE_IDS, img } from "@/lib/images";

export const metadata = { title: "Bildauswahl (intern)" };

export default function Bilder() {
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-12">
      <h1 className="display text-2xl">Bildauswahl – intern</h1>
      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        {EXISTING_SITE_IMAGE_IDS.map((id, i) => (
          <figure key={id} className="frame aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img(id, 600)} alt={`Bild ${i}`} loading="lazy" />
            <figcaption className="absolute left-2 top-2 bg-brown px-2 py-1 text-xs text-cream">{i}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
