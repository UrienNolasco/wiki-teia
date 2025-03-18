import { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <Card className="rounded-b-none rounded-t-none">
      <CardContent className="flex flex-row items-center justify-between ">
        {children}
      </CardContent>
    </Card>
  );
};

export default Header;
