"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";

const Login = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <h1>Hello World!</h1>

      {!session && (
        <Button onClick={() => signIn("azure-ad")}>Login Microsoft</Button>
      )}

      {session && (
        <div>
          <p>Logado como: {session.user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
