import SubMenu from "@/components/subMenu.jsx";

export const metadata = {
  title: "Tienda",
  description: "Generated by Jply",
};

export default function RootLayout({ children }) {
  return (
      <aside className="flex">
        <div className="fixed ">
          <SubMenu />
        </div>
        <div className="ml-60">{children}</div>
      </aside>
  );
}
