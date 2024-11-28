import { menuItems } from "../data/db";
import MenuItem from "./MenuItem";
import useOrder from "../hooks/useOrder";
import OrderContents from "./OrderContents";
import OrderTotals from "./OrderTotals";
import TipPercentageForm from "./TipPercentageForm";

const Main = () => {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
      <div className="p-5 border border-dashed border-gray-500 rounded-lg mr-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-3 mt-10">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} addItem={addItem} />
          ))}
        </div>
      </div>

      <div className="border border-dashed border-gray-500 p-5 rounded-lg space-y-10">
        {order.length  ? (
          <>
            <OrderContents order={order} removeItem={removeItem} />
            <TipPercentageForm setTip={setTip} tip={tip} />

            <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
          </>
        ) : (
          <p className="text-center">No hay pedidos</p>
        )
        }
      </div>
    </main>
  );
};

export default Main;
