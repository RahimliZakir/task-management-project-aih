import Select from "react-select";
import { Props as SelectProps } from "react-select";

const ReactSelect = ({ options, styles, ...props }: SelectProps) => {
  return (
    <Select
      options={options}
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "#D5DFEF",
          boxShadow: "none",
          "&:hover": {
            outline: "none",
          },
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
        ...styles,
      }}
      {...props}
    />
  );
};

export default ReactSelect;
