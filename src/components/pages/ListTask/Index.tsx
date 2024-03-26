import { useToggleState } from "../../../hooks/useToggleState";
import UrgencyList from "../../shared/UrgencyList/Index";

import Clock from "../../../assets/svg/clock.svg";
import Data from "./data.json";

import "./index.scss";

const ListTask = () => {
  const tabNames: string[] = Data.tabnames;

  const [isActiveToggle, handleToggleClick] = useToggleState(0);

  return (
    <section id="list-task-section" className="mt-3">
      <div className="bg-white shadow-default cont cont-p-v">
        <h5 className="text-[18px] font-bold mb-2">Tapşırıq siyahısı</h5>

        <ul className="list-task-tabs mb-4">
          {tabNames.map((tab: string, index: number) => (
            <li
              key={index}
              className={isActiveToggle === index ? "active" : ""}
              onClick={() => handleToggleClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mb-2">
          <div className="w-[25%]">
            <UrgencyList />
          </div>
          <div>
            <button type="button" className="text-[14px] text-river-bed">
              Göstər
            </button>
            <select
              defaultValue={"All"}
              className="ml-2 text-[14px] text-river-bed font-semibold outline-none"
            >
              <option value="Last10">Son 10-u</option>
            </select>
          </div>
        </div>

        <div className="list-task-list">
          <div className="flex items-center">
            <span className="priority bg-alizarin-crimson-normal"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-royal-blue inline-block ml-1">
                  Ad Soyad
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[10%]">
              <img className="w-full" src={Clock} alt="Date" />
            </div>
            <p className="text-[14px] ml-2 text-nowrap">
              01.02.2024 - 28.02.2024
            </p>
          </div>
        </div>
        <div className="list-task-list">
          <div className="flex items-center">
            <span className="priority bg-alizarin-crimson-normal"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-royal-blue inline-block ml-1">
                  Ad Soyad
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[10%]">
              <img className="w-full" src={Clock} alt="Date" />
            </div>
            <p className="text-[14px] ml-2 text-nowrap">
              01.02.2024 - 28.02.2024
            </p>
          </div>
        </div>
        <div className="list-task-list">
          <div className="flex items-center">
            <span className="priority bg-alizarin-crimson-normal"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-royal-blue inline-block ml-1">
                  Ad Soyad
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[10%]">
              <img className="w-full" src={Clock} alt="Date" />
            </div>
            <p className="text-[14px] ml-2 text-nowrap">
              01.02.2024 - 28.02.2024
            </p>
          </div>
        </div>
        <div className="list-task-list">
          <div className="flex items-center">
            <span className="priority bg-alizarin-crimson-normal"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-royal-blue inline-block ml-1">
                  Ad Soyad
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[10%]">
              <img className="w-full" src={Clock} alt="Date" />
            </div>
            <p className="text-[14px] ml-2 text-nowrap">
              01.02.2024 - 28.02.2024
            </p>
          </div>
        </div>
        <div className="list-task-list">
          <div className="flex items-center">
            <span className="priority bg-alizarin-crimson-normal"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-royal-blue inline-block ml-1">
                  Ad Soyad
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[10%]">
              <img className="w-full" src={Clock} alt="Date" />
            </div>
            <p className="text-[14px] ml-2 text-nowrap">
              01.02.2024 - 28.02.2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListTask;
