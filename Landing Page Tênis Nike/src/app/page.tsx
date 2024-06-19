import Image from "next/image";


export default function Home() {
  return (
    <main className=" bg-[#F1F1F1] text-black flex justify-center items-center h-screen w-screen">
      <article>
        <nav className=" bg-transparent inline-block relative z-10 top-12 left-16 font-bold">
          <h1>DevMentor</h1>
        </nav>
          <article className=" grid  grid-cols-2 mx-10">
            <section className=" bg-[#FFFFFF] p-16 ">
            <h1 className=" text-4xl font-bold">
              <span className=" block">Lançamento</span> Nike Air.
            </h1>
                <p className=" text-black text-opacity-50">O Tênis do futuro.</p>
                <p className=" text-black text-opacity-50">O futuro a um passo do seu alcance!</p>
                <button className=" text-white mt-8 p-2 bg-[#151823] hover:bg-[#FFFFFF] hover:border hover:border-[#151823] hover:border-solid hover:text-black">QUERO CONHECER!</button>   
            </section>
            <section className="  flex justify-center items-center p-14 bg-gradient-to-b from-[#FFEC42] from-21.56%  via-[#E2C151] via-60% to-[#10131D] to-60%">
              <Image className="relative -top-[48px] max-md:top-2 max-sm:top-10 hover:transition-transform hover:scale-50 hover:-rotate-[3.6]" src="/tenis.jpg" alt="Tenis da Nike" width={488} height={280.3}/>
            </section>
          </article>
      </article>
    </main>
  );
}
