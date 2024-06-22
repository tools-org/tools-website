import Copy from "@/components/Copy";

type ItemProps = {
  value: string;
};

const Item = (props: ItemProps) => {
  const { value } = props;
  return (
    <div className="tools-components-url-item">
      <span>{value}</span>
      <Copy size={16} value={value} />
    </div>
  );
};

export default Item;
