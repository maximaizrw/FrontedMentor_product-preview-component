import React, { useState, useEffect } from "react";
import imgProductDesktop from "./assets/images/image-product-desktop.jpg";
import imgProductMobile from "./assets/images/image-product-mobile.jpg";
import iconCart from "./assets/images/icon-cart.svg";

const App = () => {
  const [mobile, setMobile] = useState(false); // Se inicializa un estado llamado "mobile" como "false" usando el hook "useState". "setMobile" es una función que se usará más adelante para actualizar este estado.

  useEffect(() => {
    // Se utiliza el hook "useEffect" para ejecutar una función cada vez que el componente se monte (es decir, cuando se cargue en la página) y cada vez que se actualice el estado "mobile".
    const checkMobile = () => {
      // Se define una función llamada "checkMobile" que se encargará de actualizar el estado "mobile" dependiendo del ancho de la ventana del navegador.
      setMobile(window.innerWidth <= 768); // Se llama a la función "setMobile" para actualizar el estado "mobile" según si el ancho de la ventana del navegador es menor o igual a 768 píxeles. Si es así, se establece "mobile" como "true"; de lo contrario, se establece como "false".
    };

    checkMobile(); // Se llama a "checkMobile" al principio para establecer el valor inicial de "mobile".
    window.addEventListener("resize", checkMobile); // Se agrega un "event listener" al objeto "window" para que cada vez que la ventana del navegador cambie de tamaño, se llame a la función "checkMobile" para actualizar el valor del estado "mobile".

    return () => {
      window.removeEventListener("resize", checkMobile); // Se remueve el "event listener" cuando el componente se desmonte (es decir, cuando se retire de la página) para evitar pérdidas de memoria.
    };
  }, []); // El segundo argumento de "useEffect" es un array vacío, lo que indica que esta función solo se ejecutará una vez (cuando el componente se monte). Si quisieras que la función se ejecute cada vez que se actualice un estado, tendrías que incluir el estado en este array.

  return (
    <div className="h-screen text-sm flex lg:items-center justify-center bg-primary-cream">
      <div className="p-8 flex flex-col lg:flex-row">
        <div className="h-auto w-full lg:w-[250px] lg:h-[375px]">
          <img
            src={mobile ? imgProductMobile : imgProductDesktop}
            alt="Product"
            className="rounded-t-xl content-center lg:rounded-r-none lg:rounded-l-xl"
          />
        </div>
        <div className="lg:w-[250px] h-auto lg:h-[375px] bg-neutral-white rounded-r-lg">
          <div className="p-8 flex flex-col gap-y-4">
            <p className="font-montserrat font-medium uppercase text-neutral-dark-grayish-blue tracking-[0.15rem] text-xs">
              perfume
            </p>
            <h1 className="font-fraunces font-bold text-3xl leading-7">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="font-montserrat text-neutral-dark-grayish-blue text-xs">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center gap-4 font-fraunces">
              <p className=" font-bold text-4xl text-primary-dark-cyan">
                $149.99
              </p>
              <p className="line-through text-neutral-dark-grayish-blue text-xs">
                $169.99
              </p>
            </div>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary-dark-cyan hover:bg-green-900  text-neutral-white rounded-md">
              <img src={iconCart} className="w-3" />
              <span className="font-montserrat font-bold text-xs">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
