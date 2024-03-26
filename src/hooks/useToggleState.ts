import { useState } from "react";

export const useToggleState = (
  index: number
): [number, (clickedIndex: number) => void] => {
  const [isActiveToggle, setIsActiveToggle] = useState<number>(index);

  const handleToggleClick = (clickedIndex: number): void => {
    setIsActiveToggle(clickedIndex);
  };

  return [isActiveToggle, handleToggleClick];
};
