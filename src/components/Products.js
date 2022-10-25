import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "../store/productSlice";

const Products = () => {
  //don't use it in case of thunk middleware
  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    // ---------------------Use this if You dont use thunk middleware---------------------------------
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    //   console.log(data);
    // };
    // fetchProducts();
    //---------------------Use this if you use Think middle ware---------------------------------------
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>wait please</h2>;
  } else if (status === STATUSES.ERROR) {
    return <h2>something went wrong</h2>;
  }

  return (
    <>
      {products.map((product) => (
        <div
          id={product.id}
          className="d-flex flex-nowrap"
          style={{ padding: "10px" }}
        >
          <Card style={{ width: "17rem" }}>
            <Card.Img
              variant="top"
              src={product.image}
              className="rounded mx-auto d-block img-fluid"
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{product.price}</ListGroup.Item>
              <ListGroup.Item>{product.rating.count} Left</ListGroup.Item>
            </ListGroup>
            <Button
              variant="primary"
              style={{ padding: "5px" }}
              onClick={() =>
                handleAdd({
                  id: Date.now() - 10,
                  image: product.image,
                  title: product.title,
                })
              }
            >
              Add to cart
            </Button>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Products;
