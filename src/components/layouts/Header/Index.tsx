import { CSSObjectWithLabel } from "react-select";

import ReactSelect from "../../shared/ReactSelect/Index";

import logo from "../../../assets/imgs/logo.png";

const Header = () => {
  const reactSelectOptions = [
    { value: "az", label: "AZ" },
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
  ];

  const reactSelectStyles = {
    control: () => ({
      border: "none",
      fontWeight: "600",
    }),
    dropdownIndicator: (base: CSSObjectWithLabel) => ({
      ...base,
      display: "none",
    }),
  };

  return (
    <header>
      <nav className="shadow-default bg-white">
        <div className="cont">
          <div className="h-[64px] row justify-between items-center">
            <div className="w-1/4">
              <div className="w-[45px]">
                <img className="w-full" src={logo} alt="AİH Logo" />
              </div>
            </div>

            <div className="flex items-center">
              <ReactSelect
                defaultValue={reactSelectOptions[0]}
                options={reactSelectOptions}
                styles={reactSelectStyles}
                isSearchable={false}
                className="cursor-pointer"
              />
              <div className="ml-4 bg-royal-blue rounded-full w-[32px] h-[32px]"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
