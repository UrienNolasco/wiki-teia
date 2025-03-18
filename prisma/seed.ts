const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Workshop 1: Dividido em módulos
  const moduloWorkshop = await prisma.modulo.create({
    data: {
      nome: "Módulo Workshop 1",
      capacitacoes: {
        create: [
          {
            nome: "Capacitação A1",
            link_video: "https://example.com/video-a1",
          },
          {
            nome: "Capacitação A2",
            link_video: "https://example.com/video-a2",
          },
        ],
      },
    },
  });

  const workshopDivididoEmModulos = await prisma.workshop.create({
    data: {
      nome: "Workshop Dividido em Módulos",
      moduloId: moduloWorkshop.id,
    },
  });

  // Workshop 2: Com capacitação direta
  // É necessário criar um módulo para a capacitação, pois o modelo Capacitacao exige um moduloId.
  const moduloCapacitacaoDireta = await prisma.modulo.create({
    data: {
      nome: "Módulo para Capacitação Direta",
    },
  });

  const capacitacaoDireta = await prisma.capacitacao.create({
    data: {
      nome: "Capacitação B1",
      link_video: "https://example.com/video-b1",
      moduloId: moduloCapacitacaoDireta.id,
    },
  });

  const workshopCapacitacaoDireta = await prisma.workshop.create({
    data: {
      nome: "Workshop com Capacitação Direta",
      capacitacaoId: capacitacaoDireta.id,
    },
  });

  console.log("Seed data criada com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
