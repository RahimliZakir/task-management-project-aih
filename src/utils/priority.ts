import classNames from "classnames";

export const getPriorityType = (priorityType: number) => {
  const priorityClass = classNames("priority", {
    "priority-high": priorityType === 0,
    "priority-medium": priorityType === 1,
    "priority-low": priorityType === 2,
  });

  return priorityClass;
};
