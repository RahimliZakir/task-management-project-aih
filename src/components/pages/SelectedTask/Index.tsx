import Badge from "../../shared/Badge/Index";

import "./index.scss";

const SelectedTask = () => {
  return (
    <div className="mt-3 ">
      <div className="cont">
        <div className="row">
          <div className="w-3/4 bg-white shadow-default">
            <div className="cont cont-p-v">
              <div className="flex justify-between">
                <h5 className="text-[18px] font-bold">Məsələlər</h5>
                <div className="flex items-center">
                  <p className="text-[14px]">Göstər</p>
                  <p className="ml-2 text-[14px] font-semibold">Hamısı</p>
                </div>
              </div>
              <table className="mt-2 selected-task-table">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="selected-task-th rounded-tl-[2px]">
                      Status
                    </th>
                    <th className="selected-task-th">Mənbə</th>
                    <th className="selected-task-th">Mövzu</th>
                    <th className="selected-task-th rounded-tr-[2px]">
                      Prioritet
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="selected-task-td font-semibold">
                      <Badge content={"təsdiq"} />
                    </td>
                    <td className="selected-task-td font-bold">NK</td>
                    <td className="selected-task-td font-semibold">
                      2020-2025-ci ilə kimi Korporativ Strategiya Performans
                      göstəricilərinin yaxşılaşdırılması layihəsi
                    </td>
                    <td className="selected-task-td font-semibold">
                      <span className="inline-block rounded-full bg-priorityHigh w-[6px] h-[6px] mr-2"></span>
                      yüksək
                    </td>
                  </tr>
                  <tr>
                    <td className="selected-task-td font-semibold">
                      <Badge content={"təsdiq"} />
                    </td>
                    <td className="selected-task-td font-bold">NK</td>
                    <td className="selected-task-td font-semibold">
                      2020-2025-ci ilə kimi Korporativ Strategiya Performans
                      göstəricilərinin yaxşılaşdırılması layihəsi
                    </td>
                    <td className="selected-task-td font-semibold">
                      <span className="inline-block rounded-full bg-priorityHigh w-[6px] h-[6px] mr-2"></span>
                      yüksək
                    </td>
                  </tr>
                  <tr>
                    <td className="selected-task-td font-semibold">
                      <Badge content={"təsdiq"} />
                    </td>
                    <td className="selected-task-td font-bold">NK</td>
                    <td className="selected-task-td font-semibold">
                      2020-2025-ci ilə kimi Korporativ Strategiya Performans
                      göstəricilərinin yaxşılaşdırılması layihəsi
                    </td>
                    <td className="selected-task-td font-semibold">
                      <span className="inline-block rounded-full bg-priorityHigh w-[6px] h-[6px] mr-2"></span>
                      yüksək
                    </td>
                  </tr>
                  <tr>
                    <td className="selected-task-td font-semibold">
                      <Badge content={"təsdiq"} />
                    </td>
                    <td className="selected-task-td font-bold">NK</td>
                    <td className="selected-task-td font-semibold">
                      2020-2025-ci ilə kimi Korporativ Strategiya Performans
                      göstəricilərinin yaxşılaşdırılması layihəsi
                    </td>
                    <td className="selected-task-td font-semibold">
                      <span className="inline-block rounded-full bg-priorityHigh w-[6px] h-[6px] mr-2"></span>
                      yüksək
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default SelectedTask;
