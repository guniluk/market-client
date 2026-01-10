import './index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const MainPage = () => {
  const [data, setData] = useState([]);
  const URL =
    'https://bd628750-9a6b-4c24-981b-1cf6798621c8.mock.pstmn.io/products';

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const products = response.data.products;
        setData(products);
        console.log(products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="로고이미지" />
        </div>
      </div>

      <div id="body">
        <div id="banner">
          <img src="./images/banners/banner1.png" alt="배너이미지" />
        </div>
        <h1>[Products to sale^^]</h1>

        <div id="product-list">
          {data.map((product, index) => {
            return (
              <div className="product-card" key={product.id}>
                <Link to={`/products/${index}`} className="product-link">
                  <div>
                    <img
                      className="product-img"
                      src={product.imgUrl}
                      alt="농구공1"
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">
                      가격: {product.price}원
                    </span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src={product.seller[0]}
                        alt="아바타그림"
                      />
                      <span>{product.seller[1]}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div id="footer">
        <span>© 2026 BYH Market</span>
      </div>
    </div>
  );
};

export default MainPage;
