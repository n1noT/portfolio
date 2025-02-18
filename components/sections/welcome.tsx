import Image from "next/image";

export default function Welcome() {
  return (
    <section className="h-[40vh]">
      <div className="flex justify-center items-center absolute mask w-full h-screen -z-20 overflow-hidden origin-center ">
        <div className="animate-spinSlow bg-gradient-to-r from-accent to-danger shadow-gradient w-[150rem] aspect-square rounded-full origin-center"></div>
      </div>
      <div className="flex justify-start items-baseline gap-8 p-8">
        <div className="border-2 border-secondary p-8 rounded-md shadow-card flex flex-col items-start justify-between gap-4 max-w-[40rem] backdrop-blur-md">
          <h1 className="text-4xl font-bold text-primary">
            Portfolio de Nino Toutain
          </h1>
          <p>
            ▶ Bienvenue sur mon portfolio, je suis Nino Toutain, passioné de
            développement web. Vous retouverez ici mes projets, mes compétences et
            mes expériences.
          </p>
        </div>
        <Image src="/nino-toutain.jpg" alt="Nino Toutain" width={200} height={200} className="rounded-full" />
      </div>
    </section>
  );
}
