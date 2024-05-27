import { CloseOutlined } from '@ant-design/icons';

import ToggleEditText from '@/components/ToggleEditText';

export interface IRecord {
  value: string;
  title: string;
  key: string;
}
interface IProps {
  data: Array<IRecord>;
  onChange: (data: Array<IRecord>) => void;
  onSelect: (color: string) => void;
}

const Record = (props: IProps) => {
  const { data, onChange, onSelect } = props;

  const handleTitleChange = (key: string) => (value: string) => {
    onChange(
      data.map((item) => {
        if (item.key === key) {
          return { ...item, title: value };
        }
        return item;
      }),
    );
  };

  const handleRemove = (key: string) => () => {
    onChange(data.filter((item) => item.key !== key));
  };

  return (
    <div className={'color-record'}>
      {data.map((item) => {
        return (
          <div className={'color-record-item'} key={item.key}>
            <CloseOutlined
              className={'color-record-item-remove-btn'}
              onClick={handleRemove(item.key)}
            />
            <div
              className={'color-record-item-color'}
              style={{ backgroundColor: item.value }}
              onClick={() => onSelect(item.value)}
            ></div>

            <ToggleEditText
              placeholder="未命名"
              style={{ height: 22 }}
              defaultValue={item.value}
              value={item.title}
              onChange={handleTitleChange(item.key)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Record;
