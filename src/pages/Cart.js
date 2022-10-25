import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  return (
    <>
      <section className="col-lg-12 justify-content-center d-flex align-content-center flex-wrap">
        {cartProducts.map((cartProduct) => (
          <div
            id={cartProduct.id}
            className="d-flex flex-nowrap"
            style={{ padding: "10px" }}
          >
            <Card style={{ width: "17rem" }}>
              <Card.Img
                variant="top"
                src={cartProduct.image}
                className="rounded mx-auto d-block img-fluid"
              />
              <Card.Body>
                <Card.Title>{cartProduct.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{cartProduct.price}</ListGroup.Item>
              </ListGroup>
              <Button
                variant="primary"
                style={{ padding: "5px" }}
                onClick={() => handleRemove(cartProduct.id)}
              >
                Remove From Cart
              </Button>
            </Card>
          </div>
        ))}
      </section>
    </>
  );
};

export default Cart;
