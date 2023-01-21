import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Navegacion from "./Components/Navegacion/Navegacion";
import Favoritos from "./pages/Favoritos/Favoritos";
import Inicio from "./pages/Inicio/Inicio";
import { useEffect } from "react";
import client from "./api/postApi";
import { addInicio } from "./Redux/estados/InicioPost.estado";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .get("/posts")
      .then((response) => {
        dispatch(addInicio(response.data));
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="bg-green-700 min-h-screen">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<>Error 404</>} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
