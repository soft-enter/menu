import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <div
      className="mt-10 bg-red-400 grid grid-cols-1"
      style={{ height: "28vh" }}
    >
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
  );
}
