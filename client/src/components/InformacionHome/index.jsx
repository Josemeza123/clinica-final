import React from "react";
import imagen from "./720x600.jpeg";

const InformacionHome = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* imagen de 720 x 600 */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={imagen}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            FisioCurate
            <br className="hidden lg:inline-block" />
            CLÍNICA DE REHABILITACIÓN FISICA
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            recusandae delectus eveniet sint repellendus nam quod dolorem
            architecto, praesentium fuga nisi, illum possimus sit ipsum magnam
            quae omnis soluta voluptas!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InformacionHome;
