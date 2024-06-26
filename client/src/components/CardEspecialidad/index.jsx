import React from "react";

const CardEspecialidad = () => {
    const imagenes = [
        {
          src: "../../../public/vite.svg",
          title: "img1",
          subtitulo: "podologia",
          terapeuta: "Fiorella",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam minima libero totam. Modi ratione nulla obcaecati saepe, rem ipsam id cumque nesciunt enim eveniet officiaiusto tempore nobis et tempora?",
        },
        {
          src: "../../../public/vite.svg",
          title: "img1",
          subtitulo: "podologia",
          terapeuta: "Fiorella",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam minima libero totam. Modi ratione nulla obcaecati saepe, rem ipsam id cumque nesciunt enim eveniet officiaiusto tempore nobis et tempora?",
        },
        {
          src: "../../../public/vite.svg",
          title: "img1",
          subtitulo: "podologia",
          terapeuta: "Fiorella",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam minima libero totam. Modi ratione nulla obcaecati saepe, rem ipsam id cumque nesciunt enim eveniet officiaiusto tempore nobis et tempora?",
        },
        {
          src: "../../../public/vite.svg",
          title: "img1",
          subtitulo: "podologia",
          terapeuta: "Fiorella",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam minima libero totam. Modi ratione nulla obcaecati saepe, rem ipsam id cumque nesciunt enim eveniet officiaiusto tempore nobis et tempora?",
        },
        {
          src: "../../../public/vite.svg",
          title: "img1",
          subtitulo: "podologia",
          terapeuta: "Fiorella",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam minima libero totam. Modi ratione nulla obcaecati saepe, rem ipsam id cumque nesciunt enim eveniet officiaiusto tempore nobis et tempora?",
        },
      ];
  return <div>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {imagenes.map((index) => (
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={index.src}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                {index.subtitulo}
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                {index.terapeuta}
              </h2>
              <p className="leading-relaxed text-base">{index.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>;
};

export default CardEspecialidad;
