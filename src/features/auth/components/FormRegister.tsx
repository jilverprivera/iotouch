import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FormRegister = () => {
  return (
    <Card className="max-w-lg w-full">
      <CardHeader>
        <CardTitle>Create cuenta</CardTitle>
        <CardDescription>
          Inicia a visualizar los datos de tus sensores.
        </CardDescription>
      </CardHeader>
      <form>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Primer nombre</Label>
                <Input
                  id="email"
                  placeholder="Ingresa tu primer nombre"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Segundo nombre</Label>
                <Input
                  id="email"
                  placeholder="Ingresa tu segundo nombre"
                  type="text"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 ">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Primer apellido</Label>
                <Input
                  id="email"
                  placeholder="Ingresa tu primer apellido"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Segundo apellido</Label>
                <Input
                  id="email"
                  placeholder="Ingresa tu segundo apellido"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Ingresa tu correo electrónico"
                type="email"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                placeholder="*******"
                type="password"
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="re-password">Confirmar contraseña</Label>
              <Input id="re-password" placeholder="*******" type="password" />
            </div>
          </div>
          <div className="flex items-center justify-end mt-6">
            <p className="text-sm">
              ¿Ya te registraste?
              <Link href={"/ingreso"}>
                <span className="font-bold ml-2 bg-gradient-to-r from-indigo-400 to-rose-500 bg-clip-text text-transparent">
                  Iniciar sesión
                </span>
              </Link>
            </p>
          </div>
        </CardContent>
        <CardFooter className="">
          <Button className="w-full space-x-2">
            <span>Registrarse</span>
            <span>
              <FaArrowRight />
            </span>
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
