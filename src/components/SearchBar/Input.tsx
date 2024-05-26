import React, { forwardRef, useImperativeHandle, useRef } from 'react';

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = {
  onChange: (keywords: string) => void;
} & Pick<NativeInputProps, 'onFocus' | 'onBlur' | 'onMouseEnter'>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const imeWaiting = useRef(false);
  const nativeInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => nativeInputRef.current!);

  return (
    <input
      className="tools-search-bar-input"
      onCompositionStart={() => (imeWaiting.current = true)}
      onCompositionEnd={(ev) => {
        imeWaiting.current = false;
        // special case: press Enter open IME panel will not trigger onChange
        props.onChange(ev.currentTarget.value);
      }}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseEnter={props.onMouseEnter}
      onKeyDown={(ev) => {
        if (['ArrowDown', 'ArrowUp'].includes(ev.key)) ev.preventDefault();
        // esc to blur input
        if (ev.key === 'Escape' && !imeWaiting.current) ev.currentTarget.blur();
      }}
      onChange={(ev) => {
        // wait for onCompositionEnd event be triggered
        const value = ev.target.value;
        setTimeout(() => {
          if (!imeWaiting.current) {
            props.onChange(value);
          }
        }, 1);
      }}
      placeholder={'输入关键词搜索...'}
      ref={nativeInputRef}
    />
  );
});
