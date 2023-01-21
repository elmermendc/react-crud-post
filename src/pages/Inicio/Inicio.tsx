import Formulario from "../../Components/Formulario/Formulario";
import Listapublicaciones from "../../Components/Publicaciones/Listapublicaciones";
import { useState } from "react";
import ContextProvider, { Context } from "./Context";
import Footer from "../../Components/Footer/Footer";

function Inicio() {
  return (
    <div>
      <ContextProvider>
        <Formulario />
        <Listapublicaciones />
        <Footer />
      </ContextProvider>
    </div>
  );
}
export default Inicio;
