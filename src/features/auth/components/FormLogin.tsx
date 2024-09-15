import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FormLogin = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                placeholder="Ingresa tu correo electrónico"
                type="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" placeholder="*******" type="password" />
            </div>
          </div>
        </form>
        <div className="flex items-center justify-end mt-6">
          <p className="text-sm">
            ¿No te has registrado?
            <Link href={"/crear-cuenta"}>
              <span className="font-bold ml-2 bg-gradient-to-r from-indigo-400 to-rose-500 bg-clip-text text-transparent">
                ¡Hazlo ahora!
              </span>
            </Link>
          </p>
        </div>
      </CardContent>
      <CardFooter className="">
        <Button className="w-full space-x-2">
          <span>Iniciar sesión</span>
          <span>
            <FaArrowRight />
          </span>
        </Button>{" "}
        {/* <Button>Deploy</Button> */}
      </CardFooter>
    </Card>
  );
};
