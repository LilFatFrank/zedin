import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="divider"></div>
      <div className="footer">
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <img
            src="/assets/images/zedin-logo.png"
            alt="zedin-logo"
            width={65}
          />
          <div style={{ fontWeight: 600, fontSize: 18 }}>Zedin</div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <em>Style, Comfort, and Sustainability Combined</em>
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          Shop No. 15, 1st Floor, Shiv Bhagwan Market, Ulhasnagar, Ulhasnagar No
          5, Thane - 421005 (Opposite Bhagwandas Hospital)
        </p>
      </div>
    </>
  );
};

export default Footer;
