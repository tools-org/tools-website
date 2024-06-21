import { debounce } from "lodash";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = {
  onChange?: (keywords: string) => void;
  disabled?: boolean;
} & Pick<NativeInputProps, "onFocus" | "onBlur" | "onMouseEnter">;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { onChange, disabled } = props;
  const nativeInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => nativeInputRef.current!);

  const handleChange = debounce((e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, 300);

  return (
    <input
      className="tools-search-bar-input"
      disabled={disabled}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseEnter={props.onMouseEnter}
      onKeyDown={(ev) => {
        if (["ArrowDown", "ArrowUp"].includes(ev.key)) ev.preventDefault();
        if (ev.key === "Escape") ev.currentTarget.blur();
      }}
      onChange={handleChange}
      placeholder={"输入关键词搜索..."}
      ref={nativeInputRef}
    />
  );
});

Input.displayName = "Input";
