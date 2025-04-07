"use client";
import { Header } from "@/components/header";
import { SidebarLayout } from "@/components/sidebarlayout";
import UserList from "@/components/userlist";
import { useEffect, useState } from "react";
import { getUsers } from "../actions/getUsers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getProgressoCapacitacao } from "../actions/getprogressocapacitacao";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, FileCheck, FileX, XCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProgressoCapacitacao {
  totalWorkshops: number;
  concluidos: number;
  progresso: number;
  workshops: Array<{
    id: string;
    nome: string;
    startedAt: Date | null;
    done: boolean;
    doneAt: Date | null;
    truedone: boolean;
    truedoneAt: Date | null;
  }>;
}

interface IUser {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
}

const Dashbord = () => {
  const [selectedCapacitacao, setSelectedCapacitacao] = useState<string>("");
  const [progressoUsuario, setProgressoUsuario] =
    useState<ProgressoCapacitacao | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const handleUserSelect = (user: IUser) => {
    setSelectedUser(user);
  };

  const handleBuscarProgresso = async () => {
    if (selectedUser && selectedCapacitacao) {
      try {
        const progresso = await getProgressoCapacitacao({
          userId: selectedUser.id,
          nomeCapacitacao: selectedCapacitacao,
        });
        setProgressoUsuario(progresso);
        console.log("Progresso do usuário:", progresso);
      } catch (error) {
        console.error("Erro ao buscar progresso:", error);
      }
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <SidebarLayout>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="bg-gray-200 flex-1 p-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Coluna esquerda para seleções */}
            <div className="col-span-1 flex flex-col gap-4">
              {/* Card de Seleção de Usuário */}
              <ScrollArea className="h-85 rounded-md border">
                <Card>
                  <CardHeader>
                    <CardTitle>Selecione um usuário:</CardTitle>
                    <CardContent className="mt-2 pl-0">
                      <UserList
                        users={users}
                        onSelect={handleUserSelect}
                        selectedUserId={selectedUser?.id}
                      />
                    </CardContent>
                  </CardHeader>
                </Card>
              </ScrollArea>

              {/* Card de Seleção de Capacitação */}
              <Card>
                <CardHeader>
                  <CardTitle>Selecione uma capacitação:</CardTitle>
                  <CardContent className="mt-2 pl-0 flex flex-col gap-2">
                    {[
                      "Capacitação ABAP",
                      "Capacitação de Negócios",
                      "Capacitação de Configurações",
                      "MM",
                    ].map((capacitacao) => (
                      <Button
                        key={capacitacao}
                        variant="outline"
                        className={`text-left justify-start ${
                          selectedCapacitacao === capacitacao
                            ? "border-pink-500 border-2"
                            : ""
                        }`}
                        onClick={() => setSelectedCapacitacao(capacitacao)}
                      >
                        {capacitacao}
                      </Button>
                    ))}
                    <Button
                      className="mt-4 w-full transform transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
                      onClick={handleBuscarProgresso}
                      disabled={!selectedUser || !selectedCapacitacao}
                    >
                      Buscar
                    </Button>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>

            {/* Coluna direita para gráficos */}
            <div className="col-span-2">
              {progressoUsuario && (
                <Card>
                  <CardHeader>
                    <CardTitle>Progresso - {selectedCapacitacao}</CardTitle>
                    <CardContent>
                      <Table className="border rounded-lg overflow-hidden">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="min-w-[250px]">
                              Workshop
                            </TableHead>
                            <TableHead className="w-[150px]">Início</TableHead>
                            <TableHead className="w-[150px]">
                              Assistido
                            </TableHead>
                            <TableHead className="w-[150px]">
                              Devolutiva
                            </TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody>
                          {progressoUsuario.workshops.map((workshop) => (
                            <TableRow
                              key={workshop.id}
                              className="table-row-hover"
                            >
                              <TableCell className="font-medium">
                                {workshop.nome}
                              </TableCell>

                              <TableCell>
                                {workshop.startedAt
                                  ? new Date(
                                      workshop.startedAt
                                    ).toLocaleDateString("pt-BR")
                                  : "Não iniciado"}
                              </TableCell>

                              <TableCell>
                                <div className="flex items-center gap-2">
                                  {workshop.done ? (
                                    <>
                                      <CheckCircle className="h-5 w-5 text-green-500" />
                                      <span className="text-sm text-gray-500">
                                        {new Date(
                                          workshop.doneAt!
                                        ).toLocaleDateString("pt-BR")}
                                      </span>
                                    </>
                                  ) : (
                                    <XCircle className="h-5 w-5 text-red-500" />
                                  )}
                                </div>
                              </TableCell>

                              <TableCell>
                                <div className="flex items-center gap-2">
                                  {workshop.truedone ? (
                                    <>
                                      <FileCheck className="h-5 w-5 text-blue-500" />
                                      <span className="text-sm text-gray-500">
                                        {new Date(
                                          workshop.truedoneAt!
                                        ).toLocaleDateString("pt-BR")}
                                      </span>
                                    </>
                                  ) : (
                                    <FileX className="h-5 w-5 text-gray-400" />
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>

                        <TableFooter>
                          <TableRow>
                            <TableCell colSpan={2} className="font-medium">
                              Total de workshops:{" "}
                              {progressoUsuario.totalWorkshops}
                            </TableCell>
                            <TableCell colSpan={2} className="text-right">
                              Concluídos: {progressoUsuario.concluidos} (
                              {progressoUsuario.progresso}%)
                            </TableCell>
                          </TableRow>
                        </TableFooter>
                      </Table>
                    </CardContent>
                  </CardHeader>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Dashbord;
