"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const CardLogin = () => {
  const router = useRouter();

  const onSubmit = () => {
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      router.push("/telecall");
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="flex flex-col items-center justify-center w-96">
        <CardHeader>
          <h1 className="text-2xl font-bold text-primary-text">
            CPaaS Telecall
          </h1>
          <p>Faça login para continuar</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <div className="self-end mr-14">
            <Button variant="link" size="icon">
              Esqueceu a senha ?
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          {/* Chamar a função onSubmit ao clicar no botão de entrada */}
          <Button
            variant="outline"
            size="lg"
            className="w-56"
            onClick={onSubmit}
          >
            Entrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardLogin;
