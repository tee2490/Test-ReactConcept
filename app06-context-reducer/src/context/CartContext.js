import { createContext,useContext} from "react"

//สร้างพื้นที่ส่วนกลางสำหรับจัดเก็บ state
const CartContext = createContext();

//ส่ง state และค่าต่างๆ ออกไปใช้งานข้างนอก
export const useCart = ()=>{
    return useContext(CartContext);
}
