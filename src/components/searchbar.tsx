import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function SearchBar() {
    return (
      <div className="w-full bg-gray-200 py-4">
        <div className="w-full max-w-2xl px-4 mx-auto">
            <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-500" stroke="currentColor" />
            <Input placeholder="Search" className="w-full pl-10 bg-white" />
            </div>
        </div>
      </div>
    );
  }