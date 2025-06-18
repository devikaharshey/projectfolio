import Hero from "@/pages/Hero";
import ProjectRecipe from "@/pages/ProjectRecipe";
import Footer from "@/pages/components/Footer";
import {TechStack} from "@/pages/TechStack";
import {ProjectHome} from "@/pages/ProjectHome";

export default function Home() {
  return (
      <main className="relative bg-black-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <Hero />
            <ProjectRecipe />
            <TechStack />
            <ProjectHome />
            <Footer />
        </div>
      </main>
  );
}
