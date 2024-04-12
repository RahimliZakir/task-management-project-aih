import Select, { Props as SelectProps, CSSObjectWithLabel } from "react-select";

const ReactSelect = ({ options, styles, ...props }: SelectProps) => {
  const { control, indicatorSeparator, ...remainingStyles } = styles || {};

  return (
    <Select
      options={options}
      styles={{
        control: (base: CSSObjectWithLabel, props) => ({
          ...base,
          boxShadow: "none",
          ...(control ? control(base, props) : {}),
        }),
        indicatorSeparator: (base: CSSObjectWithLabel, props) => ({
          ...base,
          display: "none",
          ...(indicatorSeparator ? indicatorSeparator(base, props) : {}),
        }),
        ...remainingStyles,
      }}
      {...props}
    />
  );
};

export default ReactSelect;
