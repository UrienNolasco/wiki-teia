"use client";

import { getUsers } from "@/app/actions/getUsers";
import { Header } from "@/components/header";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserDatails from "@/components/userdatails";
import UserList from "@/components/userlist";
import { useEffect, useState } from "react";

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

  const handleUpdateCategory = (userId: string, category: string) => {
    console.log(`Atualizar usuário ${userId} para categoria ${category}`);
    // Aqui você deve adicionar a lógica para atualizar a categoria do usuário no banco de dados
  };

  return (
    <SidebarLayout>
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
            {/* <div className="border rounded bg-white p-4 h-full">
              <h2 className="text-lg font-semibold mb-4">Lista de Usuários</h2>
              <UserList
                users={users}
                onSelect={handleUserSelect}
                selectedUserId={selectedUser?.id}
              />
            </div> */}
            
            <div className="border rounded bg-white p-4 h-full">
              {selectedUser ? (
                <UserDatails
                  user={selectedUser}
                  onUpdateCategory={handleUpdateCategory}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-600">
                  Selecione um usuário para ver os detalhes
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Team;
