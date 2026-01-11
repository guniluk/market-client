import { Divider, Form, Input, InputNumber, Button } from 'antd';
import './index.css';

function UploadPage() {
  //when the form is submitted network request will be sent
  const onSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div id="upload-container">
      <Form name="upload-form" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품사진</div>}
        >
          <div id="upload-img-placeholder">
            <img
              src="/images/icons/camera.png"
              alt="upload-image"
              id="camera"
            />
            <span>클릭하여 이미지 업로드</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">판매자명</div>}
          name="seller"
          rules={[
            {
              required: true,
              message: '판매자명을 입력해줘',
            },
          ]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="판매자명을 입력해줘"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">상품이름</div>}
          name="name"
          rules={[
            {
              required: true,
              message: '상품명을 입력해줘',
            },
          ]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품명을 입력해줘"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">상품가격</div>}
          name="price"
          rules={[
            {
              required: true,
              message: '상품가격을 입력해줘',
            },
          ]}
        >
          <InputNumber
            defaultValue={0}
            className="upload-name"
            size="large"
            placeholder="상품가격을 입력해줘"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">상품설명</div>}
          name="description"
          rules={[
            {
              required: true,
              message: '상품설명을 입력해줘',
            },
          ]}
        >
          <Input.TextArea
            // className="upload-name"
            size="large"
            placeholder="상품설명을 입력해줘"
            id="product-description"
            showCount
            maxLength={300}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            id="submit-button"
          >
            상품 업로드
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
