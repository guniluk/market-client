import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../main/index.css';
import './index.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://bd628750-9a6b-4c24-981b-1cf6798621c8.mock.pstmn.io/products/${id}`
      )
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  if (!product) {
    return <h3>Loading...</h3>;
  }
  // console.log('product:', product);

  return (
    <div>
      <div id="image-box">
        <img src={'/' + product.imgUrl} alt={product.name} />
      </div>
      <div id="profile-box">
        <img
          id="profile-img"
          src={'/' + product.seller[0]}
          alt={product.seller[1]}
        />
        <span>{product.seller[1]}</span>
      </div>
      <div id="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2026.1.10</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
export default ProductPage;
