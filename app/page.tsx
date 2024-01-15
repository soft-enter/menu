import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./components/Menu";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "99vh",
          backgroundImage: `url('/img/logo.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Menu />
      </div>
      <div className="grid grid-cols-1" style={{ height: "85vh" }}>
        <div
          className="w-full md:w-auto md:mx-auto"
          style={{ marginLeft: "100px", marginRight: "100px" }}
        >
          <div className="w-full mb-10 mt-20 flex items-center justify-center">
            <h1 className="text-3xl">DISFRUTE DEL SABOR CRIOLLO INVARIABLE</h1>
          </div>
          <div>
            <hr className="border-1 border-gray-800" />
          </div>
          <div className="mx-64 my-10">
            <p className="text-2xl">
              Visítenos para desayunar, almorzar y cenar en los restaurantes.
              Ordene vía telefónica al 809-565-9236 y retire su pedido de forma
              segura en los parqueos. O reciba una Entrega Especial en casa.
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="bg-red-400 grid grid-cols-1" style={{ height: "28vh" }}>
        <div>
          <div className="flex justify-center mt-10 mb-5">
            <h1 className="text-5xl">Adrian Tropical</h1>
          </div>
          <div className="flex flex-row justify-center mb-14">
            <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
            <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 mx-5" />
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
          </div>
          <div className="flex justify-center">
            <p>Adrian Tropical. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="col-span-1 mx-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden m-3 h-56">
      <div className="md:flex">
        <div className="md:flex-shrink-0"></div>
        <div className="p-8">
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            Malecon
          </h1>
          <p className="mt-2 text-gray-500">
            Av. 27 de Febrero #429 esq. Núñez de Cáceres, Quisqueya, El Millón
            Santo Domingo
          </p>
          <div className="mt-4 space-x-2">
            <button className="px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Llamar
            </button>
            <button className="px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
