import React from "react";

const InputHelper = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  data: any
) => {
  const TempData: any = { ...data };
  TempData[e.target.name] = e.target.value;
  return TempData;
};

export default InputHelper;
