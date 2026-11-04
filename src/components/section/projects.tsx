import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aplikasi Kasir (POS)",
    subtitle: "Next.js, TypeScript, MySQL",
    image: "/images/foto-project2.png",
    href: "#",
  },
  {
    title: "Sistem Peminjaman Buku",
    subtitle: "Next.js, MySQL",
    image: "/images/foto-project1.png",
    href: "#",
  },
  {
    title: "Sistem Inventory",
    subtitle: "Laravel, Bootstrap, MySQL",
    
    image: "/images/foto-project1.png",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-green-500">
        Proyek Pilihan
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">Karya Unggulan</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <a key={project.title} href={project.href} className="group block">
            <div className="relative h-48 overflow-hidden rounded-xl bg-neutral-100">
  <Image
    src={project.image}
    alt={project.title}
    fill
    sizes="(min-width: 768px) 33vw, 100vw"
    className="object-cover transition duration-300 group-hover:scale-105"
  />
</div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold">{project.title}</h3>
                <p className="mt-1 text-xs text-neutral-500">{project.subtitle}</p>
              </div>
              <ArrowRight
                size={16}
                className="mt-1 text-green-500 transition group-hover:translate-x-1"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
