import Badge from "../../shared/Badge/Index";
import Favourite from "../../shared/Favourite/Index";

import Data from "./data.json";

import "./index.scss";

const SelectedTask = () => {
  return (
    <div className="col-span-3 bg-white shadow-default">
      <div className="cont cont-p-v">
        <div className="flex justify-between">
          <h5 className="text-[18px] font-bold">Məsələlər</h5>
          <div className="flex items-center">
            <p className="text-[14px]">Göstər</p>
            <select
              defaultValue={"All"}
              className="ml-2 text-[14px] font-semibold outline-none"
            >
              <option value="All">Hamısı</option>
            </select>
          </div>
        </div>
        <table className="mt-2 selected-task-table">
          <thead>
            <tr className="bg-gray-100">
              <th className="selected-task-th rounded-tl-[2px]">Status</th>
              <th className="selected-task-th">Mənbə</th>
              <th className="selected-task-th">Mövzu</th>
              <th className="selected-task-th rounded-tr-[2px]">Prioritet</th>
            </tr>
          </thead>
          <tbody>
            {/* Static Data */}
            {Data.map((item) => {
              return (
                <tr
                  key={item.id}
                  className={`border-solid border relative before:content-[''] before:absolute before:inline-block before:w-[13px] before:left-0 before:top-0 before:bottom-0 ${
                    item.priority.type === 0
                      ? "bg-priorityHighLight"
                      : item.priority.type === 1
                      ? "bg-priorityMediumLight"
                      : "bg-priorityLowLight "
                  } 
                  
                  ${
                    item.priority.type === 0
                      ? "border-priorityHigh"
                      : item.priority.type === 1
                      ? "border-priorityMedium"
                      : "border-priorityLow"
                  }
                  
                  ${
                    item.priority.type === 0
                      ? "before:bg-priorityHighDark"
                      : item.priority.type === 1
                      ? "before:bg-priorityMediumDark"
                      : "before:bg-priorityLowDark"
                  }`}
                >
                  <td className="flex items-center selected-task-td font-semibold">
                    <Favourite />
                    <Badge
                      content={item.status.content}
                      type={item.status.type}
                    />
                  </td>
                  <td className="selected-task-td font-bold">{item.source}</td>
                  <td className="selected-task-td font-semibold">
                    {item.subject}
                  </td>
                  <td className="selected-task-td font-semibold">
                    <div className="flex items-center">
                      <span
                        className={`${
                          item.priority.type === 0
                            ? "bg-priorityHighDark"
                            : item.priority.type === 1
                            ? "bg-priorityMediumDark"
                            : "bg-priorityLowDark"
                        } priority mr-2`}
                      ></span>
                      {item.priority.content}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedTask;
