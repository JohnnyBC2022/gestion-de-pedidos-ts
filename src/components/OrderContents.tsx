import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
};

const OrderContents = ({ order }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text text-4xl">Pedidos</h2>

      <div className="space-y-3 mt-12">
        {order.length === 0 ?
            <p className="text-center">No hay pedidos</p>
        : (
            order.map( item => (
                <div key={item.id}>
                    <p>
                        {item.name} - {item.price} €
                    </p>
                </div>
            ))
        )
        }
      </div>
    </div>
  );
};

export default OrderContents;
