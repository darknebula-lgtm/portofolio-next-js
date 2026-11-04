import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const points = [
  "Berfokus pada kebutuhan pengguna",
  "Tampilan bersih dan modern",
  "Kode rapi dan mudah dikembangkan",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
  <Image
    src="/images/foto-about.svg"
    alt="Ilustrasi mockup aplikasi web"
    fill
    sizes="(min-width: 768px) 50vw, 100vw"
    className="object-cover"
  />
</div>

        {/* Teks */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-green-500">
            Tentang Saya
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-snug tracking-tight">
            Saya suka memecahkan masalah lewat teknologi.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500">
            Sebagai mahasiswa Sistem Informasi, saya belajar mengubah kebutuhan
            nyata menjadi aplikasi web yang sederhana, indah, dan berfungsi
            dengan baik.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-green-500" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Kenalan Lebih Jauh
          </a>
        </div>
      </div>
    </section>
  );
}
