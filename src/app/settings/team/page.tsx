"use client";

import { getUsers } from "@/app/actions/getUsers";
import { updateCategory } from "@/app/actions/updatecategory";
import { Header } from "@/components/header";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserDatails from "@/components/userdatails";
import UserList from "@/components/userlist";
import { TipoUsuario } from "@prisma/client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface IUser {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
}

const Team = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleUserSelect = (user: IUser) => {
    setSelectedUser(user);
  };

  const handleUpdateCategory = async (
    userId: string,
    category: TipoUsuario
  ) => {
    try {
      await updateCategory({ userId, category });
      toast.success("Categoria atualizada com sucesso!");
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Erro ao atualizar categoria!");
    }
  };

  return (
    <SidebarLayout>
      <ToastContainer />
      <div className="h-screen flex flex-col">
        <Header />
        <SearchBar />
        <main className="flex-1 bg-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <UserList
                  users={users}
                  onSelect={handleUserSelect}
                  selectedUserId={selectedUser?.id}
                />
              </CardContent>
            </Card>

            {selectedUser ? (
              <UserDatails
                user={selectedUser}
                onUpdateCategory={handleUpdateCategory}
              />
            ) : (
              <Card>
                <CardContent>
                  <CardHeader>
                    <CardTitle>Detalhes do Usuário</CardTitle>
                  </CardHeader>
                  <div className="flex items-center justify-center h-full text-gray-600">
                    Selecione um usuário para ver os detalhes
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Team;
