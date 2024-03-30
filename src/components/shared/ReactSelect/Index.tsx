import Select from "react-select";
import { Props as SelectProps } from "react-select";

interface ReactSelectProps extends SelectProps {
  options: { value: string; label: string }[];
}

const ReactSelect = ({ options, ...props }: ReactSelectProps) => {
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
      }}
      {...props}
    />
  );
};

export default ReactSelect;
