import React from "react";
import Icon from "@mdi/react";

interface ButtonProps {
  img: string;
  value: string;
  color: string;
}

function Button({ img, value, color }: ButtonProps) {
  return (
    <button className="flex items-center hover:bg-gray-200 w-full p-2 rounded-md">
      <Icon className="h-6 mr-4" path={img} color={color} />
      {value}
    </button>
  );
}

export default Button;
