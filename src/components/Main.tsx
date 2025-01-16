import { menuItems } from "../data/db";
import MenuItem from "./MenuItem";
import OrderContents from "./OrderContents";
import OrderTotals from "./OrderTotals";
import TipPercentageForm from "./TipPercentageForm";
import { useReducer } from "react";
import { initialState, orderReducer } from "../reducers/order-reducer";

const Main = () => {
  

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
      <div className="p-5 border border-dashed border-gray-500 rounded-lg mr-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-3 mt-10">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </div>
      </div>

      <div className="border border-dashed border-gray-500 p-5 rounded-lg space-y-10">
        {state.order.length ? (
          <>
            <OrderContents order={state.order} dispatch={dispatch} />
            <TipPercentageForm dispatch={dispatch} tip={state.tip} />

            <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
          </>
        ) : (
          <p className="text-center">No hay pedidos</p>
        )}
      </div>
    </main>
  );
};

export default Main;
