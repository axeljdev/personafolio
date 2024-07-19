import "animate.css";
import Logo from "../assets/images/Logo.svg";
import ButtonHome from "../components/ButtonHome";

function Home() {
  return (
    <main className="bg-home min-h-screen w-full overflow-hidden">
      <header>
        <h1 className="relative text-white text-8xl -rotate-6 bg-secondary-color first-letter:text-primary-color mt-5 pb-5">
          PORTFOLIO
        </h1>
      </header>
      <p className="text-white text-5xl font-title font-normal bg-secondary-color pb-5 pl-8 text-left -rotate-6 mt-20 whitespace-pre-line text-shadow-title animate__animated animate__fadeInLeft">
        Bonjour,{"\n"}Je suis Axel
      </p>
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-40 right-6 rotate-[10deg] w-32 mt-5 animate__animated animate__zoomInRight"
      />
      <p className="text-white text-5xl font-title font-normal bg-secondary-color pb-5 text-right -rotate-6 mt-8 text-shadow-title animate__animated animate__fadeInRight">
        Je suis DEVELOPPEUR
      </p>
      <article className="text-white font-body font-normal bg-secondary-color p-5 pl-10 -rotate-12 mt-[3.5rem] mb-10 flex flex-col gap-10 items-center">
        <p className="text-white font-body font-normal text-shadow-lg">
          J'ai fait un bootcamp à la Wild Code School, où j'ai appris le
          JavaScript, REACTJS, mais aussi NodeJS et bien d'autres choses encore.
          Mais ce n'est pas tout ! Avant ça, j'ai fait une formation en UI design,
          j'ai donc des compétences en UI, UX. Avant ça, j'ai pu apprendre à
          manipuler Photoshop et Illustrator pendant mes années de lycée en
          Imprimerie.
        </p>
        <ButtonHome />
      </article>
    </main>
  );
}

export default Home;