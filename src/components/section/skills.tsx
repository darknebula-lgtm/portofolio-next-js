import { Database, Layout, Smartphone, BarChart3, FlaskConical, } from "lucide-react";

const skills = [
  {
    icon: Layout,
    title: "Frontend",
    desc: "Membuat antarmuka responsif dengan Next.js, React, Laravel, dan Tailwind CSS.",
  },
  {
    icon: BarChart3,
    title: "Data Analisis",
    desc: "Mengolah dan menganalisis data untuk menghasilkan insight yang membantu pengambilan keputusan.",
  },
  {
    icon: FlaskConical,
    title: "Data Science",
    desc: "Membangun model dan eksperimen data untuk menemukan pola serta membuat prediksi.",
  },
  {
    icon: Database,
    title: "Database",
    desc: "Merancang dan mengelola data dengan MySQL secara terstruktur.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Tampilan tetap nyaman dipakai di HP, tablet, maupun desktop.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-green-500">
        Keahlian
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">Apa yang bisa saya kerjakan</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-neutral-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
          >
            <Icon size={28} className="mx-auto text-green-500" />
            <h3 className="mt-4 text-sm font-semibold">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}