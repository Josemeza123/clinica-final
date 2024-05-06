import React from "react";

const Paciente = () => {
  const Informacion = [{}];
  return (
    <div className="bg-gray-400 w-screen h-screen p-5">
      {/* <form action="" className="justify-around">
        <div className="flex">
          <label htmlFor="" className="">
            Nombres
          </label>
          <input type="text" />
        </div>
        <div  className="flex">
          <label htmlFor="" className="">
            Apellidos
          </label>
          <input type="text" />
        </div>

        <label htmlFor="">Edad</label>
        <input type="text" />
        <label htmlFor="">Estado Civil</label>
        <input type="text" />
        <label htmlFor="">Ocupación</label>
        <input type="text" />
        <label htmlFor="">Peso</label>
        <input type="text" />
        <label htmlFor="">Talla</label>
        <input type="text" />
        <label htmlFor="">Fecha de Nacimiento</label>
        <input type="text" />
        <label htmlFor="">DNI</label>
        <input type="text" />
        <label htmlFor="">Dirección</label>
        <input type="text" />
        <label htmlFor="">Referencia</label>
        <input type="text" />
        <label htmlFor="">Celular</label>
        <input type="text" />
        <h3>Localización y Descripción de los Síntomas</h3>
        <label htmlFor="">Motivo de Consulta</label>
        <input type="text" />
        <label htmlFor="">Localización del dolor</label>
        <input type="text" />
        <label htmlFor="">Caracteristicas del dolor</label>
        <input type="text" />
        <label htmlFor="">Factores que aumenta o disminuye el dolor</label>
        <input type="text" />
        <label htmlFor="">Variación nocturna</label>
        <input type="text" />
        <h3>Antecedentes Personales y Familiares</h3>
        <label htmlFor="">HTA</label>
        <input type="text" />
        <label htmlFor="">Diabetes</label>
        <input type="text" />
        <label htmlFor="">Cancer</label>
        <input type="text" />
        <label htmlFor="">Cardiopatias</label>
        <input type="text" />
        <label htmlFor="">Patologias musculares</label>
        <input type="text" />
        <label htmlFor="">Enf. Reumatologicas</label>
        <input type="text" />
        <label htmlFor="">Cirugias</label>
        <input type="text" />
        <label htmlFor="">Alergias</label>
        <input type="text" />
        <label htmlFor="">Accidentes</label>
        <input type="text" />
        <label htmlFor="">Fracturas</label>
        <input type="text" />
        <h4>Signos vitales</h4>
        <label htmlFor="">T°</label>
        <input type="text" />
        <label htmlFor="">P/A</label>
        <input type="text" />
        <label htmlFor="">F.C.</label>
        <input type="text" />
        <label htmlFor="">F.R.</label>
        <input type="text" />
        <label htmlFor="">SpO2</label>
        <input type="text" />
        <h3>Diagnostico</h3>
        <label htmlFor="">Evaluación Física</label>
        <input type="text" />
        <label htmlFor="">Plan de tratamiento</label>
        <input type="text" />
      </form> */}
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="nombre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Website URL
            </label>
            <input
              type="url"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Unique visitors (per month)
            </label>
            <input
              type="number"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Paciente;
