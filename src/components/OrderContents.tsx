import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text text-4xl">Pedidos</h2>

      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          <p className="text-center">No hay pedidos</p>
        ) : (
          order.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-t border-gray-300 last-of-type:border-b">
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.quantity * item.price)}
                </p>
              </div>
              
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-bold"
                onClick={()=>removeItem(item.id)}
                >
                  X
                </button>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderContents;
