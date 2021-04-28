import React from 'react'
import ProductListScreen from "../../../screens/AdminPanel/ProductListScreen";

const ProductList = ({keyword, pageNumber}) => {
    console.log(pageNumber);
    return (
        <ProductListScreen keyword={keyword} pageNumber={pageNumber}/>
    )
}

export default ProductList


export async function getServerSideProps(ctx) {

    const { keyword, page } = ctx.query;
  
    let filledKeyword = keyword;
    if(!keyword) {
      filledKeyword = "";
    }
  
    return {
      props: {
        keyword: filledKeyword,
        pageNumber: page || 1,
      },
    };
  }