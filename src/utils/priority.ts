import classNames from "classnames";

export const getPriorityType = (priorityType: number) => {
  const priorityClass = classNames("priority", {
    "priority-high": priorityType === 0,
    "priority-medium": priorityType === 1,
    "priority-low": priorityType === 2,
  });

  return priorityClass;
};

// export const getPriorityBorder = (priorityType: number) => {
//   const priorityClass = classNames({
//     "before:bg-alizarin-crimson-normal after:border-alizarin-crimson-normal":
//       priorityType === 0,
//     "before:bg-tulip-tree after:border-tulip-tree": priorityType === 1,
//     "before:bg-royal-blue after:border-royal-blue": priorityType === 2,
//   });

//   return priorityClass;
// };
