import { useState } from "react";

import UrgencyList from "../../shared/UrgencyList/Index";

import Clock from "../../../assets/svg/clock.svg";

import "./index.scss";

const ListTask = () => {
  const tabNames: string[] = [
    "Prezident",
    "Baş Nazir",
    "Xüsusi tapşırıqlar",
    "Bütün tapşırıqlar",
  ];
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  

  return (
    <section id="list-task-section" className="mt-3">
      <div className="bg-white shadow-default cont cont-p-v">
        <h5 className="text-[18px] font-bold text-defaultHeading mb-2">
          Tapşırıq siyahısı
        </h5>

        <ul className="list-task-tabs mb-4">
          {tabNames.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="w-[25%] mb-2">
          <UrgencyList />
        </div>

        <div className="list-task-list">
          <div className="flex items-center">
            <span className="priority bg-priorityHighDark"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-badgeConfirm inline-block ml-1">
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
            <span className="priority bg-priorityHighDark"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-badgeConfirm inline-block ml-1">
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
            <span className="priority bg-priorityHighDark"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-badgeConfirm inline-block ml-1">
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
            <span className="priority bg-priorityHighDark"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-badgeConfirm inline-block ml-1">
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
            <span className="priority bg-priorityHighDark"></span>
            <div className="ml-3">
              <h6 className="text-[14px] font-semibold">
                2022‒2026-cı illər üçün inkişaf Strategiyası
              </h6>
              <p className="text-[14px] font-semibold">
                Cavabdeh şəxs
                <span className="text-badgeConfirm inline-block ml-1">
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
