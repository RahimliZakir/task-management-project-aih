import { useState, useEffect } from "react";

import Badge from "../../shared/Badge/Index";
import { SelectOptionValues } from "../../../types/enums/SelectedTask";

import "./index.scss";
import Data from "./data.json";
import starBold from "../../../assets/svg/star-Bold.svg";
import starFilled from "../../../assets/svg/star-Filled.svg";

const SelectedTask = () => {
  //* Cut the Data
  const [data, setData] = useState(Data);
  const [selectedOption, setSelectedOption] = useState<string>(
    SelectOptionValues.All
  );

  useEffect(() => {
    if (selectedOption == SelectOptionValues.All) setData(Data);
    else setData((prevState) => prevState.slice(-10));
  }, [selectedOption]);

  //* Selected Tasks of Table
  const selectedTasksFromLocalStorage: number[] = JSON.parse(
    localStorage.getItem("selectedTasks") || "[]"
  );

  const [selectedTasks, setSelectedTasks] = useState<number[]>(
    selectedTasksFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem("selectedTasks", JSON.stringify(selectedTasks));
  }, [selectedTasks]);

  const handleClick = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    setSelectedTasks((prevState) => {
      const index = prevState.indexOf(id);

      if (index === -1) {
        return [...prevState, id];
      } else {
        return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
      }
    });
  };

  const isSelected = (id: number) => {
    return selectedTasks.includes(id);
  };

  //* Dynamic Height of Table
  // const tableRef = useRef<HTMLTableElement>(null);
  // useEffect(() => {
  //   if (tableRef.current) {
  //     const tds = Array.from(tableRef.current.querySelectorAll("td"));
  //     const maxHeight = tds.reduce((maxHeight, td) => {
  //       const height = td.getBoundingClientRect().height;
  //       return height > maxHeight ? height : maxHeight;
  //     }, 0);

  //     tds.forEach((td) => {
  //       td.style.height = `${maxHeight}px`;
  //     });
  //   }
  // }, []);

  return (
    <div className="h-[645px] col-span-4 lg:col-span-3 bg-white shadow-default">
      <div className="cont cont-p-v">
        <div className="flex justify-between">
          <h5 className="text-[18px] font-bold">Məsələlər</h5>
          <div className="flex items-center">
            <button type="button" className="text-[14px] text-river-bed">
              Göstər
            </button>
            <select
              defaultValue={"All"}
              className="ml-2 text-[14px] text-river-bed font-semibold outline-none"
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="All">Hamısı</option>
              <option value="Last10">Son 10-u</option>
            </select>
          </div>
        </div>

        <div className="overflow-auto">
          <table className="w-[850px] md:w-full mt-2 selected-task-table">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100 flex items-center">
                <th className="selected-task-th w-2/12 text-center rounded-tl-[2px]">
                  Status
                </th>
                <th className="selected-task-th w-1/12 text-center">Mənbə</th>
                <th className="selected-task-th w-7/12">Mövzu</th>
                <th className="selected-task-th w-2/12 text-center rounded-tr-[2px]">
                  Prioritet
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="overflow-y-auto">
              {/* Static Data */}
              <div className="h-[540px]">
                {data?.map((item) => (
                  <tr
                    key={item.id}
                    className="flex items-center relative even:bg-selago-70 cursor-pointer before:content-[''] before:absolute before:inline-block before:w-[13px] before:left-0 before:top-0 before:bottom-0 after:[content-''] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:border-0 after:border-solid after:border-l-0"
                  >
                    <td className="selected-task-td w-2/12 font-semibold flex justify-center">
                      <div
                        onClick={(e) => handleClick(item.id, e)}
                        className="relative z-10 w-[18px] mr-4 cursor-pointer"
                      >
                        <img
                          src={isSelected(item.id) ? starFilled : starBold}
                          alt="Favourite"
                          className="w-full h-[18 px]"
                        />
                      </div>
                      <Badge
                        content={item.status.content}
                        type={item.status.type}
                      />
                    </td>
                    <td className="selected-task-td w-1/12 font-bold">
                      {item.source}
                    </td>
                    <td className="selected-task-td w-7/12 font-semibold">
                      {item.subject}
                    </td>
                    <td className="selected-task-td w-2/12 font-semibold flex justify-center">
                      <span className="priority mr-2"></span>
                      {item.priority.content}
                    </td>
                  </tr>
                ))}
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectedTask;
