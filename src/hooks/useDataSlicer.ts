import { useState, useEffect } from "react";

import { SelectOptionValues } from "../types/enums/SelectedTask";

export const useDataSlicer = (Data: any[]) => {
  const [data, setData] = useState(Data);
  const [selectedOption, setSelectedOption] = useState<string>(
    SelectOptionValues.All
  );

  useEffect(() => {
    if (selectedOption == SelectOptionValues.All) setData(Data);
    else setData((prevState: any[]) => prevState.slice(-10));
  }, [selectedOption]);

  return { data, setSelectedOption };
};
