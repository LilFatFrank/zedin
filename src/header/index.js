import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => window.location.href = window.location.origin}>
          <img src="/assets/images/zedin-logo.png" alt="zedin-logo" width={65} />
          <div style={{ fontWeight: 600, fontSize: 18 }}>Zedin</div>
        </div>
        <a style={{ color: "#222", fontWeight: 500, fontSize: 16, textDecoration: 'none' }} href={window.location.origin + '/products'}>Products</a>
      </div>
    </div>
  );
};

export default Header;
