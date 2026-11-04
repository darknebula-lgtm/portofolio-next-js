import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const techStack = ["Next.js", "React", "Laravel", "TypeScript", "Tailwind CSS", "MySQL", "PHP", "JavaScript"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-16 md:grid-cols-2 md:pt-24">
        {/* Teks */}
        <div className="pb-10 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-500">
            Web Developer
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Membangun aplikasi web yang berguna bagi banyak orang.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500">
            Saya Virgy Syahry, mahasiswa Sistem Informasi yang suka membuat aplikasi
            web yang rapi, cepat, dan mudah digunakan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Lihat Proyek <ArrowRight size={16} />
            </a>
            <a
              href="/cv.pdf"
              download={'CV.pdf'}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium transition hover:bg-neutral-50"
            >
              Unduh CV <Download size={16} />
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="relative flex justify-center pb-10 md:justify-end md:pb-24">
          <div className="relative h-72 w-72 overflow-hidden rounded-full bg-neutral-100 md:h-[26rem] md:w-[26rem]">
            <Image
              src="/images/foto-profil2.jpg"
              alt="Foto profil"
              fill
              priority
              sizes="416px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Strip tech stack */}
      <div className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
            Teknologi yang saya gunakan
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-neutral-500">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}