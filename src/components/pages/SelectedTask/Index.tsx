import { useState, useEffect } from "react";

import Badge from "../../shared/Badge/Index";
import ModalTask from "../../shared/ModalTask/Index";
import { useDataSlicer } from "../../../hooks/useDataSlicer";
import { useHandleModal } from "../../../hooks/useHandleModal";
import { getPriorityType } from "../../../utils/priority";

import starBold from "../../../assets/svg/star-Bold.svg";
import starFilled from "../../../assets/svg/star-Filled.svg";
import Data from "./data.json";
import "./index.scss";

const SelectedTask = () => {
  //* Cut the Data
  const { data, handleDataSlicer, setSelectedOption } = useDataSlicer(Data);

  //* Selected Tasks of Table
  const selectedTasksFromLocalStorage: number[] = JSON.parse(
    localStorage.getItem("selectedTasks") || "[]"
  );

  const [selectedTasks, setSelectedTasks] = useState<number[]>(
    selectedTasksFromLocalStorage
  );

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

  useEffect(() => {
    localStorage.setItem("selectedTasks", JSON.stringify(selectedTasks));
  }, [selectedTasks]);

  const isSelected = (id: number) => {
    return selectedTasks.includes(id);
  };

  //* Fix Width Of Priorities

  //* Modal
  const { isModalOpen, openModal, closeModal } = useHandleModal(true);

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
            <button
              onClick={handleDataSlicer}
              type="button"
              className="text-[14px] text-river-bed"
            >
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

        <div className="overflow-x-auto">
          <table className="w-[800px] md:w-full mt-2 selected-task-table">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100 flex items-center">
                <th className="selected-task-th w-2/12 rounded-tl-[2px]">
                  Status
                </th>
                <th className="selected-task-th w-1/12">Mənbə</th>
                <th className="selected-task-th w-7/12">Mövzu</th>
                <th className="selected-task-th w-2/12 rounded-tr-[2px]">
                  Prioritet
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="overflow-y-auto h-[540px]">
              {/* Static Data */}
              {data?.map((item) => (
                <tr
                  key={item.id}
                  onClick={openModal}
                  className="flex items-center relative even:bg-selago-70 cursor-pointer border-l-0 before:content-[''] before:absolute before:inline-block before:w-[13px] before:left-0 before:top-0 before:bottom-0"
                >
                  <td className="selected-task-td w-2/12 font-semibold flex items-center justify-center">
                    <div
                      onClick={(e) => handleClick(item.id, e)}
                      className="relative z-10 w-[18px] mr-4 cursor-pointer"
                    >
                      <img
                        src={isSelected(item.id) ? starFilled : starBold}
                        alt="Favourite Star"
                        className="w-full h-[18px]"
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
                  <td className="selected-task-td w-2/12 font-semibold">
                    <div className="flex items-center">
                      <span
                        className={`${getPriorityType(
                          item.priority.type
                        )} w-[6px] h-[6px] mr-2`}
                      ></span>
                      {item.priority.content}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <ModalTask isModalOpened={isModalOpen} onCloseModal={closeModal} />
      )}
    </div>
  );
};

export default SelectedTask;
