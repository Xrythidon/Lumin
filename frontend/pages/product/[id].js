import { useRouter } from "next/router";
import ProductScreen from "../../screens/ProductScreen";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return <ProductScreen id={id} />;
};

export default Product;
