import React from "react";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Button from "../ui/Button";
// import { Button, Input, Label } from "../ui";

const Login = () => {
  return (
    <>
      <section>
        <div className="items-center px-5 py-12 lg:px-20">
          <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div className="mt-8">
              <div className="mt-6">
                <form action="" className="space-y-6">
                  <div>
                    <Label htmlFor="usuario">Usuario</Label>
                    <div>
                      <Input
                        type="text"
                        placeholder="Usuario"
                        id="usuario"
                        name="usuario"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contraseña">Contraseña</Label>
                    <div>
                      <Input
                        type="password"
                        placeholder="Contraseña"
                        id="contraseña"
                        name="contraseña"
                      />
                    </div>
                  </div>
                  <div>
                    <Button>Ingresar</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
