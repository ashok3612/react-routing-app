import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h2>Product Detail</h2>
      <h3>{params.productId}</h3>
    </section>
  );
};

export default ProductDetail;
