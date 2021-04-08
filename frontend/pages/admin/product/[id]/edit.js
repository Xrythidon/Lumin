import React from 'react'
import ProductEditScreen from "../../../../screens/ProductEditScreen";

const ProductEdit = ({id}) => {
    return (
        <ProductEditScreen id={id}/>
    )
}

export default ProductEdit

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    return {
      props: {
        id,
      },
    };
  }
  