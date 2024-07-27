import { Item } from "./Item";
import { useCart } from "../context/CartContext";

export const Cart = () => {
const {products,total,amount}=useCart()

  return (
    <div>
      {products.map((data)=> <Item key={data.id} {...data}/>)}
    </div>
  );
};
