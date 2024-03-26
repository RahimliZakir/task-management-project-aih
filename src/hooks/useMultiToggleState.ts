import { useState } from "react";

export const useMultiToggleState = () => {
  const [selectedStars, setSelectedStars] = useState<number[]>([]);

  const toggleStarSelection = (index: number) => {
    setSelectedStars((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  const isSelected = (index: number) => selectedStars.includes(index);

  return { selectedStars, toggleStarSelection, isSelected };
};
