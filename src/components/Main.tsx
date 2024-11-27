import { menuItems } from "../data/db";
import MenuItem from "./MenuItem";

const Main = () => {
  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div>
        <h2>Menú</h2>
        {menuItems.map((item) => (
          <MenuItem key={item.id} />
        ))}
      </div>

      <div>
        <h2>Pedidos</h2>
      </div>
    </main>
  );
};

export default Main;
