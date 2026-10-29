import { LogoLockup } from "@/components/Logo";

export const metadata = { title: "A.R. ASCENDANCY — Private Vorschau" };

export default function Zugang() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <LogoLockup className="text-[1.3rem] text-logo" />
      <h1 className="display mt-14 text-[1.8rem] text-brown md:text-[2.3rem]">Private Vorschau</h1>
      <p className="measure mt-6 text-[0.95rem] leading-[1.8] text-brown-soft">
        Diese Seite ist ausschließlich über den persönlichen Einladungslink erreichbar. Bitte öffnen
        Sie den Link, den Sie von PENAXIS erhalten haben.
      </p>
    </main>
  );
}
