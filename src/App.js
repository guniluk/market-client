import './App.css';
import MainPage from './main';
import { Switch, Route } from 'react-router-dom';
import UploadPage from './upload/index.js';
import ProductPage from './product/index.js';

const App = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <MainPage />
      </Route>
      <Route exact={true} path="/upload">
        <UploadPage />
      </Route>
      <Route exact={true} path="/products/:id">
        <ProductPage />
      </Route>
    </Switch>
  );
};

export default App;
