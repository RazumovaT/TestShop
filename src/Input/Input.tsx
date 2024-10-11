import React from "react";
import { Input } from "antd";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputForm: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      style={{
        marginTop: "30px",
        height: "50px",
        width: "1050px",
        fontSize: "20px",
      }}
    />
  );
};
