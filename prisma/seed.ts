const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([
    prisma.workshop.deleteMany(),
    prisma.capacitacao.deleteMany(),
    prisma.formacao.deleteMany(),
  ]);

  console.log("Banco de dados limpo!");
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
                // Negócios
                {
                  nome: "01. Conceitos Inicias SAP",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=5b0d34bf-171e-48e3-b6e4-5fd915ad094e&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "02. Business Partner - Parte 1",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=c4982123-4c13-495c-a8ea-2c6c4bb7bd24&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "02. Business Partner - Parte 2",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=e4acc8ef-4993-4bbd-a672-d8d2b4622277&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "03. Estrutura Organizacional e Cadastro de Materiais - Parte 1",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=27ecb25a-d907-41b9-b422-0b95409722c2&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "03. Estrutura Organizacional e Cadastro de Materiais - Parte 2",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=7d265aaa-9909-4ba1-8df5-86c3e8f943a8&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "03. Estrutura Organizacional e Cadastro de Materiais - Parte 3",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=7e6e9611-a658-4255-8ab5-a9ceba12a6ec&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "04. J1BTAX - Parte 1",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=d394bc90-bcfc-45b5-be5d-a60d965aae11&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "04. J1BTAX - Parte 2",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=918836e2-b5d1-4a66-b5f4-1c0136d96fcf&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "05. Dados Mestre de Preço",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=aa086cd9-4b9c-403c-974b-a5a6f4e7743b&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "06. Fluxo de Venda e Distribuição - Parte 1",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=0aefda01-e81a-4412-9633-af2272f55257&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "06. Fluxo de Venda e Distribuição - Parte 2",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=3d35232b-3f38-41b6-87c6-dbfbbcdac75b&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "06. Fluxo de Venda e Distribuição - Parte 3",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=f90f2b01-1924-42ec-97d9-882f7cb3a82d&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "07. NF-e - Parte 1",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=8ca3f4c1-cc3e-4466-8e5e-2bc992c6f32d&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "07. NF-e - Parte 2",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=b74aa858-6157-4c53-b448-5397163ba257&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
              ],
            },
          },
          {
            nome: "Capacitação de Configurações",
            workshops: {
              create: [
                {
                  nome: "01. Fluxo SD - Parte 1",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=a1e87377-2fdb-4526-acec-9bc2b13da65a&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "01. Fluxo SD - Parte 2",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=68092af9-02bc-49ab-8029-6ea7f9c3f08d&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "01. Fluxo SD - Parte 3",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=2de4cfad-f7c4-40e0-9a8b-9344ad1fedc5&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "02. Precificação - Parte 1",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=b0239948-f52b-42ec-9369-0ed6800c3eb7&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "02. Precificação - Parte 2",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=80e56e6e-846b-4eda-811e-ceafb459e6eb&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "02. Precificação - Parte 3",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=fff5538e-e021-4107-8de2-5c3127bf8cdc&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "03. Processo Gratuito",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=372c21fd-adba-4c0e-8130-bd8a888e2045&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "04. Contabilização da Receita (VKOA)",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=331c5e1e-1aa6-4100-aa51-a44738285221&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "05. Determinação de Contas (VKOA) e Conta Caixa (OB40)",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=0153c51d-7ca9-4820-aa0e-756f290858b7&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "07. Venda com Entrega Futura",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=0cc8fbf5-8aab-4417-87e2-8dbcd43f48cc&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "10. Fórmulas e Requisitos",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=eaca7aed-d134-4704-8ade-4c2c46f5fe1b&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "11. ABAP Para Funcionais",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes/_layouts/15/embed.aspx?UniqueId=4ac87535-a6d7-44f3-9434-c5635db3835c&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
              ],
            },
          },
        ],
      },
    },
  });

  // Criar Formação ABAP
  const formacaoABAP = await prisma.formacao.create({
    data: {
      nome: "ABAP",
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
                  nome: "ABAP 03 - Tipos de Dados",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=1f519352-3abe-4c4c-b34d-83b5d0677e85&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "ABAP 04 - Linguagem ABAP",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=33430e42-08c0-4f07-8a54-a512805e70b4&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "ABAP 05 - Open SQL",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=094a1425-0020-4019-a9b2-99469743eb51&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "ABAP_06 - Report Com Listas",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=adc79e4b-e6d4-4ccf-af05-f5545a57fded&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "ABAP 07 - Tabela Interna",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=18d746b1-ca98-4e7f-84b1-779539fd72c6&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "ABAP_09 - Orientação a objetos",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=121fcc49-01d5-431f-a5e4-ca61867c90bd&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
                {
                  nome: "ABAP_10 - CDSVIEW",
                  link_video:
                    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=0918af66-1e8d-49d5-99e4-0cb7453156d1&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
                },
              ],
            },
          },
        ],
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
