import Link from "next/link";

function SubMenu() {
  return (
    <>
    <nav className="flex  gap-4">
      <ul className="flex flex-col gap-1 bg-blue-700 text-white p-10 m-10">
        <li>
          <Link href="/tienda/electronica">Electronica</Link>
        </li>
        <li>
          <Link href="/tienda/decoracion">Decoracion</Link>
        </li>
        <li>
          <Link href="/tienda/electronica">Moviliario</Link>
        </li>
        <li>
          <Link href="/tienda/libros">Libros</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}
export default SubMenu;
