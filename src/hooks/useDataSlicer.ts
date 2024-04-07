import { useState } from "react";

import { SelectOptionValues } from "../types/enums/SelectedTask";

export const useDataSlicer = (Data: any[]) => {
  const [data, setData] = useState(Data);
  const [selectedOption, setSelectedOption] = useState<string>(
    SelectOptionValues.All
  );

  const handleDataSlicer = () => {
    if (selectedOption == SelectOptionValues.All) setData(Data);
    else setData((prevState: any[]) => prevState.slice(-10));
  };

  return { data, handleDataSlicer, setSelectedOption };
};
