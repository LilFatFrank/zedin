import "./products.css";
import DATA from "../data.json";
import ImageSlider from "../imageslider";

const Products = () => {
  return (
    <>
      <div className="container product-heading">
        <h1 className="heading-1">Our Products</h1>
      </div>
      <div className="columns">
        {DATA.PRODUCTS.map((i) => (
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
    </>
  );
};

export default Products;
