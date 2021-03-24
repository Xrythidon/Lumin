import {useEffect} from "react";
import { useRouter } from "next/router";
import ProductScreen from "../../screens/ProductScreen";

const Product = ({id}) => {
  const router = useRouter();
  //const { id } = router.query;

  useEffect(() => {

  },[])

  
    
  return ( id && <ProductScreen id={id} />);
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  return {
    props: {
      id,
    },
  };
}

export default Product;


