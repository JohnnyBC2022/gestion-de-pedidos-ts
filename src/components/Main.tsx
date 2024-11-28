import { menuItems } from "../data/db";
import MenuItem from "./MenuItem";
import useOrder from "../hooks/useOrder";
import OrderContents from "./OrderContents";

const Main = () => {

    const { order, addItem } = useOrder();

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

      <div className="border border-dashed border-teal-300 p-5 rounded-lg space-y-10">
        <OrderContents
          order={order}
        />
      </div>
    </main>
  );
};

export default Main;
