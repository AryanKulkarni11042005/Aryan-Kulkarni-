import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Learning } from "./components/Learning";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useProfile } from "./hooks/useProfile";

export default function App() {
  const profile = useProfile();

  return (
    <div className="bg-bg text-ink">
      <Nav />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience profile={profile} />
        <Projects profile={profile} />
        <Learning profile={profile} />
        <Skills profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </div>
  );
}
