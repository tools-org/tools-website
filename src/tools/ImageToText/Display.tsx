import { Space, Typography } from 'antd';

const ImageDisplay = ({ imageUrl, altText }: any) => {
  const { Text } = Typography;
  return (
    <Space direction="vertical" style={{ marginTop: '16px' }}>
      <Text type="secondary">图片展示</Text>
      <img
        src={imageUrl}
        alt={altText}
        style={{ maxWidth: '100%', maxHeight: 300 }}
      />
    </Space>
  );
};

export default ImageDisplay;
