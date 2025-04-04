import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

interface IUser {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
}

interface UserDetailsProps {
  user: IUser;
  onUpdateCategory: (userId: string, category: string) => void;
}

const categories = ["Aluno", "Admin", "Avaliador"];

const UserDatails = ({ user, onUpdateCategory }: UserDetailsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleUpdate = () => {
    if (selectedCategory) {
      onUpdateCategory(user.id, selectedCategory);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalhes do Usuário</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            {user.image ? (
              <AvatarImage src={user.image} alt={user.name || user.email} />
            ) : (
              <AvatarFallback>
                {user.name ? user.name[0] : user.email[0]}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{user.name || "Sem nome"}</span>
            <span className="text-sm text-gray-600">{user.email}</span>
          </div>
        </div>
        <Select
          onValueChange={(value) => setSelectedCategory(value)}
          value={selectedCategory}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="mt-4 w-full" onClick={handleUpdate}>
          Atualizar Categoria
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserDatails;
