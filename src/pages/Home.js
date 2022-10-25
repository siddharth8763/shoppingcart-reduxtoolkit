import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <h2 className="d-flex justify-content-center">Welcome to Rtk Store</h2>
      <section className="col-lg-12 justify-content-center d-flex align-content-center flex-wrap">
        <Products />
      </section>
    </>
  );
};

export default Home;
