import { Input, Space } from 'antd';
import { useCallback, useState } from 'react';

// import _ from 'lodash';
import ToolModule from '@/components/ToolModule';
import {
  convertCelsiusToKelvin,
  convertDelisleToKelvin,
  convertFahrenheitToKelvin,
  convertKelvinToCelsius,
  convertKelvinToDelisle,
  convertKelvinToFahrenheit,
  convertKelvinToNewton,
  convertKelvinToRankine,
  convertKelvinToReaumur,
  convertKelvinToRomer,
  convertNewtonToKelvin,
  convertRankineToKelvin,
  convertReaumurToKelvin,
  convertRomerToKelvin,
} from './Conver';
import './index.css';
interface TemperatureTypes {
  title: string;
  unit: string;
  ref: number;
  toKelvin: (c: number) => number;
  fromKelvin: (v: number) => number;
}
const units: Record<string, TemperatureTypes> = {
  celsius: {
    title: '摄氏度',
    unit: '°C',
    ref: 0,
    toKelvin: convertCelsiusToKelvin,
    fromKelvin: convertKelvinToCelsius,
  },
  kelvin: {
    title: '开尔文',
    unit: 'K',
    ref: 273.15,
    toKelvin: (v) => v,
    fromKelvin: (v) => v,
  },
  fahrenheit: {
    title: '华氏度',
    unit: '°F',
    ref: 32,
    toKelvin: convertFahrenheitToKelvin,
    fromKelvin: convertKelvinToFahrenheit,
  },
  rankine: {
    title: '兰氏度',
    unit: '°R',
    ref: 491.67,
    toKelvin: convertRankineToKelvin,
    fromKelvin: convertKelvinToRankine,
  },
  delisle: {
    title: '德利斯尔度',
    unit: '°De',
    ref: 150,
    toKelvin: convertDelisleToKelvin,
    fromKelvin: convertKelvinToDelisle,
  },
  newton: {
    title: '牛顿度',
    unit: '°N',
    ref: 0,
    toKelvin: convertNewtonToKelvin,
    fromKelvin: convertKelvinToNewton,
  },
  reaumur: {
    title: '瑞士度',
    unit: '°Ré',
    ref: 0,
    toKelvin: convertReaumurToKelvin,
    fromKelvin: convertKelvinToReaumur,
  },
  romer: {
    title: '罗默度',
    unit: '°Rø',
    ref: 0,
    toKelvin: convertRomerToKelvin,
    fromKelvin: convertKelvinToRomer,
  },
};

const TemperatureConverter = () => {
  const [values, setValues] = useState(units);

  const updateValues = useCallback((key, newValue) => {
    const newKelvins = values[key].toKelvin(newValue);
    const nextValues = { ...values };
    for (const scale in nextValues) {
      let value =
        scale === key ? newValue : nextValues[scale].fromKelvin(newKelvins);
      value = parseFloat(value.toFixed(2));
      nextValues[scale].ref = isNaN(value) ? 0 : value;
    }
    setValues(nextValues);
  }, []);

  const handleInputChange = useCallback(
    (key) => (e: any) => {
      const value = e.target.value;
      const newValue = parseFloat(value) || 0;
      updateValues(key, newValue);
    },
    [],
  );

  const addonBeforeStyle = {
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
  };
  const addonAfterStyle = {
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignitems: 'center',
  };
  return (
    <div className="tools-inputs">
      <Space direction="vertical" size="large">
        {Object.entries(values).map(([key, { title, unit, ref }]) => (
          <Input
            style={{ width: '600px' }}
            key={key}
            addonBefore={<span style={addonBeforeStyle}>{title}</span>}
            addonAfter={<span style={addonAfterStyle}>{unit}</span>}
            value={ref}
            type="number"
            onChange={handleInputChange(key)}
          />
        ))}
      </Space>
    </div>
  );
};

export default ToolModule(TemperatureConverter);
