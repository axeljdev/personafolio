
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
      <p className="text-white text-5xl font-title font-normal bg-secondary-color pb-5 pl-8 text-left -rotate-6 mt-20 whitespace-pre-line text-shadow-title">
        Hello,{"\n"}Je suis Axel
      </p>
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-40 right-6 rotate-[10deg] w-32 mt-5"
      />
      <p className="text-white text-5xl font-title font-normal bg-secondary-color pb-5 text-right -rotate-6 mt-8 text-shadow-title">
        Je suis DEVELOPPEUR
      </p>
      <article className="text-white text-sm font-body font-normal bg-secondary-color p-5 pl-10 -rotate-12 mt-16 flex flex-col gap-10 items-center">
        <p className="text-white text-sm font-body font-normal text-shadow-lg">
          J'ai fait un bootcamp a la Wild code school, ou j'ai appris le
          Javascript, REACTJS, mais aussi NodeJS et bien d'autres choses encore.
          Mais c'est pas tout ! Avant ça, j'ai fait une formation en UI design,
          j'ai donc des compétences en UI, UX. Avant ça j'ai pu apprendre a
          manipuler Photoshop et Illustrator pendant mes années de lycée en
          Imprimerie.
        </p>
        <ButtonHome />
      </article>
    </main>
  );
}

export default Home;
