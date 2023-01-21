import { useDispatch } from "react-redux";
import {
  addInicioNuevo,
  seleccionarPostInicio,
  updateInicio,
} from "../../Redux/estados/InicioPost.estado";
import React, { useState, useEffect } from "react";
import { Context } from "../../pages/Inicio/Context";
import { useSelector } from "react-redux";

function Formulario() {
  const estadoInicia = {
    id: 0,
    useriId: 0,
    title: "",
    body: "",
  };
  const [mostrarNuevo, setMostrarNuevo] = useState(false);
  const [form, setform] = useState(estadoInicia);
  const obtIdx = React.useContext(Context) as any;
  const obtenerPostEdit = useSelector(seleccionarPostInicio);
  const [actualizar, setactualizar] = useState(false);
  const [nuevo, setNuevo] = useState(false);
  useEffect(() => {
    setform(obtIdx.editId);
    setMostrarNuevo(false);
    setactualizar(false);
    setNuevo(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [obtIdx]);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setactualizar(false);
    setNuevo(false);
    const encontrar = obtenerPostEdit.find((st: any) => st.id === form.id);

    if (encontrar) {
      dispatch(updateInicio(form));
      setactualizar(true);
    } else {
      const uniq = new Date().getTime();
      dispatch(addInicioNuevo({ ...form, useriId: 1, id: uniq }));
      setform(estadoInicia);
      setNuevo(true);
    }
  };
  return (
    <div className="grid place-items-center p-3">
      <button
        onClick={() => {
          setMostrarNuevo(!mostrarNuevo);
          setform(estadoInicia);
          setactualizar(false);
          setNuevo(false);
        }}
        className="text-white m-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
      >
        {mostrarNuevo ? "Nuevo Post" : "Cancelar"}
      </button>

      {actualizar ? (
        <div
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Actualización exitosa!</span>
        </div>
      ) : (
        ""
      )}
      {nuevo ? (
        <div
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Registro exitoso!</span>
        </div>
      ) : (
        ""
      )}

      <div
        className={`${
          mostrarNuevo ? "hidden " : ""
        }bg-gray-800 md:w-2/5 shadow-lg rounded p-6 mb-8 w-full mx-auto`}
      >
        <form onSubmit={enviarFormulario}>
          <label
            htmlFor="titulo"
            className="block mb-2 text-sm font-medium text-white"
          >
            {" "}
            Titulo
          </label>
          <input
            type="text"
            name="title"
            placeholder="ingrese titulo"
            id="titulo"
            value={form.title}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <label
            htmlFor="descripcion"
            className="block mb-2 text-sm font-medium text-white"
          >
            Descripción
          </label>
          <textarea
            name="body"
            id="descripcion"
            onChange={handleChange}
            value={form.body}
            required            
            className="bg-gray-50 border h-32 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          ></textarea>
          <button
            className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            type="submit"
          >
            enviar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Formulario;
