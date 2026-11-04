import Navbar from "@/components/layout/navbar";
import Hero from "@/components/section/hero";
import About from "@/components/section/about";
import Skills from "@/components/section/skills";
import Projects from "@/components/section/projects";
import Footer from '@/components/section/footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Ajakan kontak */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-neutral-200 p-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Punya proyek dalam pikiran?</h2>
              <p className="mt-2 text-sm text-neutral-500">
                Saya senang membantu mewujudkan ide Anda menjadi aplikasi yang nyata.
              </p>
            </div>
            <a
              href="mailto:email@kamu.com"
              className="rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Hubungi Saya
            </a>
          </div>
        </section>
        <Footer />
                
      </main>

    </>
  );
}