export const cartReducer = (state,action) => { 
    //กระบวนการจัดการ state ผ่าน action
    if (action.type === "CALCULATE_TOTAL") {
        const { total, amount } = state.products.reduce(
          (cartTotal, item) => {
            const { price, quantity } = item;
            const totalprice = price * quantity; //ยอดรวมสินค้าแต่ละรายการ
            cartTotal.total += totalprice; //จำนวนเงินรวม
            cartTotal.amount += quantity; // บริมาณรวม
            return cartTotal;
          },
          {
            total: 0,
            amount: 0,
          }
        );
        return {
          ...state,
          total,
          amount,
        };
      }
   
}
