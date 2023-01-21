import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { PostUnico } from "../../models/Post";
import { addFavoritos, removeFavoritos } from "../../Redux/estados/Post.estado";
import { BsHeart, BsHeartFill, BsPencilFill, BsTrashFill } from "react-icons/bs";
import { remInicio } from "../../Redux/estados/InicioPost.estado";
import { Context } from "../../pages/Inicio/Context";
import {useContext} from 'react'
type PostProps = {
  post: PostUnico;
  isIncluded: boolean;
};
function CardPublicacion({ post, isIncluded }: PostProps) {

  const obtIdPost = useContext(Context) as any;
  

  const locActual = useLocation();
  const locAactualF = locActual.pathname === "/react-crud-post/favoritos";

  const postNuevo = useDispatch();
  const remFavorito = () => postNuevo(removeFavoritos(post));
  const agregarFavoritos = () => postNuevo(addFavoritos(post));

  const eliminaraTodo = () => {
    if (confirm("Eliminar?")) {
      postNuevo(remInicio(post));
      postNuevo(removeFavoritos(post));
    }
  };

  return (
    <div className="bg-gray-800 sm:w-60 shadow-lg rounded p-2 w-full">
      <div className="py-2 px-4 text-center tracking-wide flex justify-between gap-6">
        <div className="flex">
          <p className="flex text-red-400 text-sm justify-center">
            {isIncluded ? (
              <BsHeartFill
                className="h-5 w-5 cursor-pointer"
                onClick={remFavorito}
              />
            ) : (
              <BsHeart
                className="h-5 w-5 cursor-pointer"
                onClick={agregarFavoritos}
              />
            )}{" "}
            
          </p>
        </div>

        <div className="flex">
          <p className="flex text-gray-400 text-sm justify-center">
            {locAactualF ? (
              ""
            ) : (
              <BsPencilFill
                className="h-5 w-5 cursor-pointer"
                onClick={()=>{obtIdPost.setEditId(post)
                  }}
              />
            )}
            
          </p>
        </div>
        <div className="flex">
          <p className="flex text-gray-400 text-sm justify-center">
            {locAactualF ? (
              ""
            ) : (
              <BsTrashFill
                className="h-5 w-5 cursor-pointer"
                onClick={eliminaraTodo}
              />
            )}
          </p>
        </div>
      </div>

      <div className="p-2">
        <h3 className=" text-white py-1 text-base justify-center">
          {post.body}
        </h3>
        <p className="text-gray-400 text-sm">{post.title}</p>
      </div>
    </div>
  );
}
export default CardPublicacion;
