import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>This is Product Page</h2>
      <section>
        <ul>
          <li>
            <Link to="/products/p1">Product 1</Link>
          </li>
          <li>
            <Link to="/products/p2">Product 2</Link>
          </li>
          <li>
            <Link to="/products/p3">Product 3</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProductsPage;
