import { useEffect } from "react";
import ImageSlider from "../imageslider";
import DATA from "../data.json";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div
        className="img-holder"
        style={{ backgroundImage: "url(/assets/images/home-bg.jpeg" }}
      >
        <div className="img-holder-content">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "white",
                fontWeight: 400,
                fontSize: "64px",
                marginBottom: "10px",
              }}
            >
              Stylish and durable
            </div>
            <div
              style={{
                color: "white",
                fontWeight: 400,
                fontSize: "20px",
                opacity: "0.6",
              }}
            >
              We deliver top-quality denim, combining comfort and style to
              redefine men's fashion.
            </div>
          </div>
          <a href="/products" className="explore-link">
            <div>Explore</div>
          </a>
        </div>
      </div>
      <div className="container">
        <h1 className="heading-1">Redefining Men's Jeans with Perfect Fits</h1>
        <div className="container-paragraph">
          Your destination for high quality men's jeans, offering the perfect
          blend of comfort, style, and fit.
          <br />
        </div>
        <div className="divider"></div>
        <div className="grid-container">
          <p className="grid-paragraph">
            Zedin Jeans offers an exquisite range of men's jeans that
            effortlessly blend sophistication with durability. Our jeans are
            meticulously crafted from superior quality denim sourced from some
            of the finest mills around the world. Every pair undergoes rigorous
            quality checks to ensure that only the best product reaches our
            customers. Our wide variety of fits, ranging from slim and straight
            to relaxed and boot cut, cater to all body types and personal
            preferences. Furthermore, we offer a plethora of washes and finishes
            to cater to every style - be it the classic dark wash for a more
            formal look, or a distressed finish for a casual outing.
          </p>
          <p className="grid-paragraph">
            At Zedin Jeans, we believe in more than just selling a product; we
            aim to provide a complete experience. Each pair of our jeans offers
            unparalleled comfort, thanks to the use of premium, stretchable
            fabrics, and exceptional tailoring. Our products ensure a perfect
            fit that enhances your body contour and provides the confidence to
            stride with style. Alongside, our sustainable manufacturing process
            minimizes environmental impact, making each purchase a step towards
            a greener planet. With us, you're not just buying a pair of jeans;
            you're investing in quality, comfort, style, and sustainability.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="product-heading">
          <h3 className="heading-3">Featured Products</h3>
          <p className="product-paragraph">
            Check out new and popular products
          </p>
        </div>
      </div>
      <div className="columns">
        {DATA.PRODUCTS.filter(
          (i, index) => index === 4 || index === 9 || index === 14
        ).map((i) => (
          <>
            <div className="column" key={i.label}>
              <div className="column-slider">
                <ImageSlider images={i.images} />
              </div>
              <strong>{i.label}</strong>
              <p style={{ marginBottom: "10px", lineHeight: "24px" }}>
                <strong>Fabric:&nbsp;</strong>
                {i.fabric}
                <br />
                <strong>Sizes:&nbsp;</strong>
                {i.sizes}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
