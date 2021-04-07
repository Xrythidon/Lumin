import React from 'react'
import ProductListScreen from "../../../screens/ProductListScreen";

const ProductList = () => {
    return (
        <ProductListScreen/>
    )
}

export default ProductList

// export async function getServerSideProps(ctx) {
//     const { id } = ctx.query;
//     return {
//       props: {
//         id,
//       },
//     };
//   }
  