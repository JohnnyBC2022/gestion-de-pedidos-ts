import { menuItems } from "../data/db";
import MenuItem from "./MenuItem";
import useOrder from "../hooks/useOrder";

const Main = () => {

    const { addItem } = useOrder();

  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-2 mt-10">
          {menuItems.map((item) => (
            <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
            />
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
