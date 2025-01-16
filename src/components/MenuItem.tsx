import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="border-2 rounded-lg border-teal-400 p-2 w-full flex justify-between hover:bg-teal-200"
      onClick={() => dispatch({type: 'add-item', payload: {item}})}
    >
      <p>{item.name}</p>
      <p className="font-bold">{item.price} €</p>
    </button>
  );
};

export default MenuItem;
