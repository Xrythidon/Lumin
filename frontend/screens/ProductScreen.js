import React, { useState, useEffect} from "react";
import Rating from "../components/Rating"
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, ListGroup, Row, Image, Card, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from 'next/router'

import { listProductDetails } from "../redux/actions/product";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ id }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter()
  const productDetails = useSelector(state => state.productDetails)

  const {loading, error, product } = productDetails


  useEffect(() => {
    dispatch(listProductDetails(id))

  }, [dispatch, id])

  const addToCartHandler = (e) => {
    router.push(`/cart/${id}?qty=${qty}`)
  }

  const handleQtyChange = (e) => {
    console.log(e.target.value);
    setQty(e.target.value)
  }

  return (
    id ? (
      <Container>
          <Link href="/">
              <a className="btn btn-light my-3">
              Go Back
              </a>
          </Link>
        {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                  <Row>
          <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
              <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>{product.name}</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      Price: ${product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                      Description: ${product.description}
                  </ListGroup.Item>
              </ListGroup>
          </Col>
          <Col md={3}>
              <Card>
                  <ListGroup variant="flush">
                      <ListGroup.Item>
                          <Row>
                              <Col>
                                Price:
                              </Col>
                              <Col>
                                ${product.price}
                              </Col>
                          </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                          <Row>
                              <Col>
                                Status:
                              </Col>
                              <Col>
                                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                              </Col>
                          </Row>
                      </ListGroup.Item>

                      {product.countInStock > 0 && (
                        <ListGroup.Item>
                        <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}

                            onChange={handleQtyChange}
                            
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                        </ListGroup.Item>
                      )}

                      <ListGroup.Item>
                            <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={product.countInStock === 0}>Add To Cart</Button>
                      </ListGroup.Item>
                  </ListGroup>
              </Card>
          </Col>
        </Row>

        )}
      </Container>
    ) :
    (<div>Loading...</div>)
  );
};

export default ProductScreen;
