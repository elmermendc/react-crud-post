import { useSelector } from "react-redux";
import CardPublicacion from "../../Components/Publicaciones/CardPublicacion";
import { seleccionarPost } from "../../Redux/estados/Post.estado";

function Favoritos() {


  const favoritos = useSelector(seleccionarPost);
  return (
    <div className="grid place-items-center p-3">
      <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {favoritos.map((post) => {
          return <CardPublicacion key={post.id} post={post} isIncluded={true}/>;
        })}
      </section>
    </div>
  );
}
export default Favoritos;
