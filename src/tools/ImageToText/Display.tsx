import { Space, Typography ,Image} from 'antd';

const ImageDisplay = ({ imageUrl, altText }: any) => {
  const { Text } = Typography;
  const { Paragraph } = Typography;
  return (
    <Space direction="vertical" style={{ marginTop: '16px' }}>
      <Image
        src={imageUrl}
        alt={altText}
        style={{ maxWidth: '100%', maxHeight: 300 }}
      />
    </Space>
  );
};

export default ImageDisplay;