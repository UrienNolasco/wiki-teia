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
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=d9089d7c-5795-40cd-9b0c-7492e802c3b6&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "ABAP_02 - Request (versionamento, boas práticas de desenvolvimento)",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=059bd40d-c38f-4ce6-a037-186817f0d8a4&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },

                {
                  nome: "ABAP_03 - Tipos de dados",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=1f519352-3abe-4c4c-b34d-83b5d0677e85&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
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
