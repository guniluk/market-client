import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();

  return <h1>This is product {id} Page</h1>;
}
export default ProductPage;
