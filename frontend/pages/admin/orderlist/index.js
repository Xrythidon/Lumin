import React from 'react'
import OrderListScreen from "../../../screens/AdminPanel/OrderListScreen";

const OrderList = () => {
    return (
        <OrderListScreen/>
    )
}

export default OrderList

// export async function getServerSideProps(ctx) {
//     const { id } = ctx.query;
//     return {
//       props: {
//         id,
//       },
//     };
//   }
  