const orders = [
  { id: 1, payment: "信用卡" },
  { id: 2, payment: "現金"   },
  { id: 3, payment: "信用卡" },
  { id: 4, payment: "Line Pay" },
  { id: 5, payment: "現金"   },
  { id: 6, payment: "信用卡" },
];
// 期望輸出：{ 信用卡: 3, 現金: 2, "Line Pay": 1 }

function countByPayment(orders) {
  return orders.reduce(( p , order) => {
    const payment = order.payment
    if(!p[payment]){
      p[payment] = 1
    }else{
      p[payment] += 1
    }
    return p
  },{ })

}
console.log(countByPayment(orders));