import { useSelector } from "react-redux";
import { seleccionarPostInicio } from "../../Redux/estados/InicioPost.estado";
import { seleccionarPost } from "../../Redux/estados/Post.estado";
import CardPublicacion from "./CardPublicacion";
import { v4 as uuid } from "uuid";

function Listapublicaciones() {
  const dataInicial = useSelector(seleccionarPostInicio);
  const incluidos = useSelector(seleccionarPost);

 

  return (
    <div className="grid place-items-center p-3">
      
      <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dataInicial
          .map((post) => {
            return (
              <CardPublicacion
                key={uuid()}
                post={post}
                isIncluded={incluidos.includes(post)}
              />
            );
          })
          .reverse()}
      </section>
    </div>
  );
}
export default Listapublicaciones;
