import Login from "@/components/login";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

const Home = () => {
  return <Login />;
};

export default Home;
