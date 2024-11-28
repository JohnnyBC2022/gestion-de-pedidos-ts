import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);

  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total y propina:</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>

        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-bold text-2xl bg-teal-200">
            {formatCurrency(totalAmount)}
          </span>
        </p>
      </div>
      <button
        className="w-full bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 mt-10 disabled:opacity-30"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Pedido
      </button>
    </>
  );
};

export default OrderTotals;
