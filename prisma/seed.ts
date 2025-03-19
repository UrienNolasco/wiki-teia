const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Criar Formação SD
  const formacaoSD = await prisma.formacao.create({
    data: {
      nome: "Formação SD",
      capacitacoes: {
        create: [
          {
            nome: "Capacitação de Negócios",
            workshops: {
              create: [
                {
                  nome: "01. Conceitos iniciais SAP",
                  link_video: "https://video.plataforma/sd-conceitos-iniciais",
                },
                {
                  nome: "02. Business Partner",
                  link_video: "https://video.plataforma/sd-business-partner",
                },
                {
                  nome: "03. Estrutura Organizacional e Cadastro de Materiais",
                  link_video: "https://video.plataforma/sd-estrutura-materiais",
                },
              ],
            },
          },
          {
            nome: "Capacitação de Configurações",
            workshops: {
              create: [
                {
                  nome: "01. Fluxo SD",
                  link_video: "https://video.plataforma/sd-fluxo",
                },
                {
                  nome: "02. Precificação",
                  link_video: "https://video.plataforma/sd-precificacao",
                },
                {
                  nome: "03. Processos Gratuitos",
                  link_video: "https://video.plataforma/sd-processos-gratuitos",
                },
              ],
            },
          },
        ],
      },
    },
    include: {
      capacitacoes: {
        include: {
          workshops: true,
        },
      },
    },
  });

  // Criar Formação ABAP
  const formacaoABAP = await prisma.formacao.create({
    data: {
      nome: "Formação ABAP",
      capacitacoes: {
        create: [
          {
            nome: "Capacitação ABAP",
            workshops: {
              create: [
                {
                  nome: "ABAP_01 - Overview",
                  link_video: "https://video.plataforma/abap-overview",
                },
                {
                  nome: "ABAP_02 - Request (versionamento, boas práticas de desenvolvimento)",
                  link_video: "https://video.plataforma/abap-request",
                },
                {
                  nome: "ABAP_03 - Tipos de dados",
                  link_video: "https://video.plataforma/abap-tipos-dados",
                },
              ],
            },
          },
        ],
      },
    },
    include: {
      capacitacoes: {
        include: {
          workshops: true,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
