import UrgencyList from "../../shared/UrgencyList/Index";
import ModalTask from "../../shared/ModalTask/Index";
import { useToggleState } from "../../../hooks/useToggleState";
import { useHandleModal } from "../../../hooks/useHandleModal";

import Clock from "../../../assets/svg/clock.svg";
import Data from "./data.json";
import "./index.scss";

const ListTask = () => {
  const tabNames: string[] = Data.tabnames;

  const [isActiveToggle, handleToggleClick] = useToggleState(1);

  //* Modal
  const { isModalOpen, openModal, closeModal } = useHandleModal(false);

  return (
    <section id="list-task-section" className="mt-3">
      <div className="bg-white shadow-default cont cont-p-v">
        <h5 className="text-[18px] font-bold">Tapşırıq siyahısı</h5>

        <ul className="row list-task-tabs mb-4">
          {tabNames.map((tab: string, index: number) => (
            <li
              key={index}
              className={`${isActiveToggle === index ? "active" : ""} mt-2`}
              onClick={() => handleToggleClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="flex flex-col md:flex-row items-center justify-between mb-2">
          <div className="w-full md:w-[40%] lg:w-[30%] xl:w-[25%] mb-2">
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

        <div onClick={openModal} className="list-task-list">
          <div className="flex items-center">
            <span className="priority w-[9px] h-[9px] bg-alizarin-crimson-normal"></span>
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
        <div onClick={openModal} className="list-task-list">
          <div className="flex items-center">
            <span className="priority w-[9px] h-[9px] bg-ghost"></span>
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
        <div onClick={openModal} className="list-task-list">
          <div className="flex items-center">
            <span className="priority w-[9px] h-[9px] bg-royal-blue"></span>
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
        <div onClick={openModal} className="list-task-list">
          <div className="flex items-center">
            <span className="priority w-[9px] h-[9px] bg-ghost"></span>
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
        <div onClick={openModal} className="list-task-list">
          <div className="flex items-center">
            <span className="priority w-[9px] h-[9px] bg-alizarin-crimson-normal"></span>
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
      {isModalOpen && (
        <ModalTask isModalOpened={isModalOpen} onCloseModal={closeModal} />
      )}
    </section>
  );
};

export default ListTask;
