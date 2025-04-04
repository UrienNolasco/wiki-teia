import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { TipoUsuario } from "@prisma/client";

interface IUser {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
}

interface UserDetailsProps {
  user: IUser;
  onUpdateCategory: (userId: string, category: TipoUsuario) => void;
}

const categories = Object.values(TipoUsuario);

const UserDatails = ({ user, onUpdateCategory }: UserDetailsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<TipoUsuario | "">(
    ""
  );

  const handleUpdate = () => {
    if (selectedCategory) {
      onUpdateCategory(user.id, selectedCategory);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Defina a categoria do usuário</CardTitle>
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
          onValueChange={(value) => setSelectedCategory(value as TipoUsuario)}
          value={selectedCategory}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category: TipoUsuario) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button
          className="mt-4 w-full transform transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
          onClick={handleUpdate}
        >
          Atualizar Categoria
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserDatails;
