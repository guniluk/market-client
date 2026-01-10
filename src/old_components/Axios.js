import { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL =
      'https://bd628750-9a6b-4c24-981b-1cf6798621c8.mock.pstmn.io/products';
    axios
      .get(URL)
      .then((response) => {
        const status = response.status;
        const products = response.data['products'];
        console.log(`status: ${status}`);
        console.log('data: ', products);
        setData(products);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error 발생', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="product-card">
          <div>
            <img className="product-img" src={item.imgUrl} alt={item.name} />
          </div>
          <div className="product-contents">
            <span className="product-name">{item.name}</span>
            <span className="product-price">{item.price}원</span>
            <div className="product-seller">
              <img
                className="product-avatar"
                src={item.seller[0]}
                alt="아바타그림"
              />
              <span>{item.seller[1]}</span>
              <h2>vdknvkldn</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Axios;
