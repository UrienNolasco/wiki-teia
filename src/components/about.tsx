const About = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#fffbf3] pt-0">
      <div className=" w-full flex h-full">
        {/* Lado esquerdo azul */}
        <div className="w-1/2 bg-blue-500 min-h-screen"></div>
        {/* Lado direito com texto */}
        <div className="w-1/2 flex flex-col justify-center text-center p-12">
          <h2 className="text-4xl font-bold text-center uppercase ">
            Sobre o nosso <br></br> aplicativo
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae nisi et diam euismod malesuada nec in ex.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
