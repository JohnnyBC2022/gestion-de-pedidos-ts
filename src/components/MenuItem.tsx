import type { MenuItem } from "../types";
type MenuItemProps = {
  item: MenuItem;
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <button className="border-2 rounded-lg border-teal-400 p-2 w-full flex justify-between hover:bg-teal-200">
      <p>{item.name}</p>
      <p className="font-bold">{item.price} €</p>
    </button>
  );
};

export default MenuItem;
