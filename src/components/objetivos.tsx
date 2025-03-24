const Objetivos = () => {
  return (
    <section className="w-full h-screen flex items-center bg-[#fffbf3] text-black p-8">
      <div className="mx-auto w-full flex flex-row gap-16">
        {/* Coluna Esquerda (1/3) */}
        <div className="w-1/3 flex flex-col ml-32 ">
          <h1
            className="text-6xl font-bold text-nowrap"
            style={{ fontFamily: "Red Hat Display" }}
          >
            Sobre os nossos
          </h1>
          <h1 className="text-pink-500 uppercase text-6xl">Objetivos</h1>
        </div>

        {/* Coluna Direita (2/3) */}
        <div className="w-2/3 flex flex-col space-y-16">
          {/* Item 1 */}
          <div className="border-l-4 border-blue-500 pl-8 uppercase font-bold">
            <p className="text-3xl leading-relaxed">
              Organizar conteúdos educacionais de forma acessível
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-l-4 border-blue-500 pl-8 uppercase font-bold">
            <p className="text-3xl leading-relaxed">
              Estimular a aprendizagem ativa por meio de apresentações
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-l-4 border-blue-500 pl-8 uppercase font-bold ">
            <p className="text-3xl leading-relaxed">
              Acompanhar o progresso dos usuários de forma estruturada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objetivos;
