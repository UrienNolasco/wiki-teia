import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

interface IUser {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
}

interface UserListProps {
  users: IUser[];
  onSelect: (user: IUser) => void;
  selectedUserId?: string;
}

const UserList = ({ users, onSelect, selectedUserId }: UserListProps) => {
  return (
    <ScrollArea className="h-full">
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex items-center p-4 border-b cursor-pointer ${
            selectedUserId === user.id ? "bg-gray-300" : "bg-white"
          }`}
          onClick={() => onSelect(user)}
        >
          <Avatar className="mr-4">
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
      ))}
    </ScrollArea>
  );
};

export default UserList;
