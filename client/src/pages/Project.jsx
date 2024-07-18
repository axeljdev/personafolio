import { useLoaderData } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import ButtonLink from "../components/ButtonLink";
import Comment from "../components/Comment";

function Project() {
  const project=useLoaderData()

  return (
    <main className="bg-home min-h-screen w-full">
      <h1 className="text-white text-8xl -rotate-12 bg-secondary-color first-letter:text-primary-color ">
        PROJET {project.id}
      </h1>
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-16 right-5 rotate-[10deg] mt-5"
      />
      <article className="bg-secondary-color -rotate-12 w-[25rem] pl-[1.5rem] mt-20 ">
        <header>
          <h2 className="text-[3rem] text-white pl-12 absolute -top-9 z-10 text-shadow-title">
            {project.name}
          </h2>
        </header>
        <p className="text-white pt-16 m-7 ">
          {project.description}
        </p>
        <footer className="flex gap-16">
          <ul className="text-white pl-7">
            <li className="font-bold">Stack :</li>
            <li className="w-12">{project.stack}</li>
          </ul>
          <ButtonLink link={project.link}/>
        </footer>
        <img src={`/src/assets/images/projets/${project.img}`} alt="" className="mt-10 ml-[-2rem]"/>
      </article>
        <Comment/>
    </main>
  );
}

export default Project;