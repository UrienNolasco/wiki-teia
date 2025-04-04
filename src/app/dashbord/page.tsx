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

interface ProgressoCapacitacao {
  totalWorkshops: number;
  concluidos: number;
  progresso: number;
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
                      <div className="mt-4 space-y-2">
                        <p>
                          Total de workshops: {progressoUsuario.totalWorkshops}
                        </p>
                        <p>Concluídos: {progressoUsuario.concluidos}</p>
                      </div>
                    </CardContent>
                  </CardHeader>
                </Card>
              )}
              {/* Espaço reservado para gráficos */}
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-gray-500">Área para gráficos</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Dashbord;
