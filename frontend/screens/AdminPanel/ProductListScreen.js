import React, { useEffect } from "react";
import Link from "next/link";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Paginate from "../../components/Paginate";
import {
  deleteProduct,
  deleteProductReset,
  listProducts,
  createProduct,
  createProductReset,
} from "../../redux/actions/product";

const ProductListScreen = ({pageNumber, keyword}) => {


  const dispatch = useDispatch();
  const router = useRouter();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(createProductReset());

    if (!userInfo || !userInfo.isAdmin) {
      router.push("/login");
    }

    if (successCreate) {
      router.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      console.log(pageNumber);
      console.log(keyword);
      dispatch(listProducts(keyword, pageNumber));
    }
  }, [dispatch, router, userInfo, successCreate, pageNumber, keyword]);

  useEffect(() => {
    if (successDelete) {
      dispatch(listProducts());
    }
  }, [successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    dispatch(deleteProduct(id));
    dispatch(deleteProductReset());
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col>
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus" /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Link href={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </Link>
                    <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(product._id)}>
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} keyword={keyword ? keyword : ""} />
        </>
      )}
    </>
  );
};

export default ProductListScreen;
