import React, {useState, useEffect} from "react";
import Rating from "../components/Rating"
import { Col, Container, ListGroup, Row, Image, Card, Button } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";

const ProductScreen = ({ id }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(id)
      const {data} = await axios.get(`/api/products/${id}`);
      setProduct(data)
    }

    fetchProduct();
  }, [id])

  return (
    id ? (
      <Container>
          <Link href="/">
              <a className="btn btn-light my-3">
              Go Back
              </a>
          </Link>

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

                      <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Add To Cart</Button>
                      </ListGroup.Item>
                  </ListGroup>
              </Card>
          </Col>
        </Row>
      </Container>
    ) :
    (<div>Loading...</div>)
  );
};

export default ProductScreen;
