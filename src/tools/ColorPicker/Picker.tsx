import { Fragment } from 'react';
import ColorWrap from 'react-color/es/components/common/ColorWrap';
import Hue from 'react-color/es/components/common/Hue';
import Saturation from 'react-color/es/components/common/Saturation';
import GooglePointer from 'react-color/es/components/google/GooglePointer';
import GooglePointerCircle from 'react-color/es/components/google/GooglePointerCircle';

import Fields from './Fields';

const Color = ({ onChange, rgb, hsl, hsv, hex }: any) => {
  return (
    <Fragment>
      <div className={'color-picker-select'}>
        <div
          className={'color-picker-swatch'}
          style={{
            background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
          }}
        />
        <div className={'color-picker-saturation'}>
          <Saturation
            hsl={hsl}
            hsv={hsv}
            pointer={GooglePointerCircle}
            onChange={onChange}
          />
        </div>
      </div>

      <div className={'color-picker-hue'}>
        <Hue
          hsl={hsl}
          hsv={hsv}
          radius="4px"
          pointer={GooglePointer}
          onChange={onChange}
        />
      </div>

      <div>
        <Fields rgb={rgb} hsl={hsl} hex={hex} hsv={hsv} onChange={onChange} />
      </div>
    </Fragment>
  );
};

export default ColorWrap(Color);
