import { useLoaderData } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import ButtonLink from "../components/ButtonLink";
import Comment from "../components/Comment";
import Return from "../components/Return";
import ArrowNext from "../components/ArrowNext";

function Project() {
  const project = useLoaderData();

  return (
    <main className="bg-home min-h-screen w-full overflow-hidden">
      <h1 className="text-white text-8xl -rotate-12 bg-secondary-color first-letter:text-primary-color ">
        PROJET {project.id}
      </h1>
      <Return />
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-16 right-8 rotate-[10deg] mt-20"
      />
      <article className="bg-secondary-color -rotate-12 w-[25rem] ml-10 ">
        <header>
          <h2 className="text-[3rem] text-white pl-12 absolute -top-9 z-10 text-shadow-title ">
            {project.name}
          </h2>
        </header>
        <p className="text-white pt-16 m-7 text-shadow-lg animate__animated animate__bounceInRight">
          {project.description}
        </p>
        <footer className="flex gap-16">
          <ul className="text-white pl-7 animate__animated animate__bounceInRight">
            <li className="font-bold">Stack :</li>
            <li className="w-12">{project.stack}</li>
          </ul>
          <ButtonLink link={project.link} />
        </footer>
        <img
          src={`/src/assets/images/projets/${project.img}`}
          alt=""
          className="mt-10 ml-[-2rem animate__animated animate__bounceInRight "
        />
      </article>
      <ArrowNext />
      <Comment projectData={project} />
    </main>
  );
}

export default Project;