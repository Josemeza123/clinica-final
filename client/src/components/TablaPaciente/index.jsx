import React from "react";
import edit from "./edit.svg";
import view from "./view.svg";
import trash from "./trash.svg";

const TablaPaciente = () => {
  const Titles = [
    { title: "DNI" },
    { title: "Apellidos" },
    { title: "Nombres" },
    { title: "Teléfono" },
    { title: "Direccion" },
    { title: "Acciones" },
  ];
  const Usuarios = [
    {
      dni: "7777777",
      apellidos: "Macha Ramirez",
      nombre: "Carlos Gustavo",
      telefono: "999999999",
      direccion: "Jr. Galvez 165",
    },
    {
      dni: "7777777",
      apellidos: "Macha Ramirez",
      nombre: "Carlos Gustavo",
      telefono: "999999999",
      direccion: "Jr. Galvez 165",
    },
    {
      dni: "7777777",
      apellidos: "Macha Ramirez",
      nombre: "Carlos Gustavo",
      telefono: "999999999",
      direccion: "Jr. Galvez 165",
    },
    {
      dni: "7777777",
      apellidos: "Macha Ramirez",
      nombre: "Carlos Gustavo",
      telefono: "999999999",
      direccion: "Jr. Galvez 165",
    },
    {
      dni: "7777777",
      apellidos: "Macha Ramirez",
      nombre: "Carlos Gustavo",
      telefono: "999999999",
      direccion: "Jr. Galvez 165",
    },
  ];
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {Titles.map((title, key) => (
              <th
                className="text-center border-collapse border-solid border-2 border-gray-500"
                key={key}
              >
                {title.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Usuarios.map((usuario, index) => (
            <tr key={index} className="text-sm">
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {usuario.dni}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {usuario.apellidos}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {usuario.nombre}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {usuario.telefono}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {usuario.direccion}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                <button className="bg-yellow-600">
                  <img className="w-8 " src={edit} alt="" />
                </button>
                <button className="bg-yellow-100">
                  <img className="w-8" src={view} />
                </button>
                <button className="bg-red-600">
                  <img className="w-8" src={trash} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaPaciente;
