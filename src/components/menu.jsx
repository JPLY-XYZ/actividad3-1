import Link from "next/link";

function Menu() {
  return (
    <>
      <nav className="bg-blue-700 text-white">
        <ul className="flex justify-between items-center h-20 mx-10">
          <div className="flex gap-4">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/tienda">Tienda</Link>
            </li>
          </div>
          <div className="flex gap-4">
            <li>
              <Link href="/registro">Registro</Link>
            </li>
            <li>
              <Link href="/acerca">Acerca de ...</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
export default Menu;
