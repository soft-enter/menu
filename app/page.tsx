import { Menu } from "./components/Menu";

export default function Page() {
  return (
    <div className="bg-red-200">
      <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage: `url('/img/logo.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Menu />
      </div>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}>seccion 3</div>
    </div>
  );
}
