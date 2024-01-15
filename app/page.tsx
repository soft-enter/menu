import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./components/Menu";
import { Card } from "./components/Card";

import { Footer } from "./components/Footer";

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
      <div className="grid grid-cols-1 " style={{ height: "85vh" }}>
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
          <div>
            <h1 className=" text-4xl">Sucursales</h1>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
