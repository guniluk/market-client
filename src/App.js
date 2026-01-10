import 'antd/dist/antd.css';
import './App.css';
import MainPage from './main';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import UploadPage from './upload/index.js';
import ProductPage from './product/index.js';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const App = () => {
  const history = useHistory();
  return (
    <>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="로고이미지" />
          </Link>
          <Button
            size="large"
            icon={<DownloadOutlined />}
            onClick={() => {
              history.push('/upload');
            }}
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
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
      </div>

      <div id="footer">
        <span>© 2026 BYH Market</span>
      </div>
    </>
  );
};

export default App;
