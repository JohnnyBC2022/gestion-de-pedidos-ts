import { menuItems } from "../data/db";
import MenuItem from "./MenuItem";

const Main = () => {
  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-2 mt-10">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div>
        <h2>Pedidos</h2>
      </div>
    </main>
  );
};

export default Main;
