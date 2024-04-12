import { useRef, useEffect } from "react";
import { CSSObjectWithLabel } from "react-select";

import ReactSelect from "../ReactSelect/Index";
import { ModalTaskProps } from "../../../types/interfaces/ModalTask";

import times from "../../../assets/svg/times.svg";
import paperclip from "../../../assets/svg/paperclip.svg";

const ModalTask = ({ isModalOpened, onCloseModal }: ModalTaskProps) => {
  const modalHeading = useRef<HTMLHeadingElement>(null!);

  useEffect(() => {
    console.log(
      window
        .getComputedStyle(modalHeading.current)
        .getPropertyValue("font-size")
    );
  }, []);

  //* Modal
  const modalRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpened]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onCloseModal();
    }
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //* React Select
  const reactSelectOptions = [
    { value: "submit", label: "Məruzə edin" },
    { value: "report", label: "Hesabat verin" },
    { value: "talk", label: "Mənimlə danışın" },
    { value: "info", label: "Əlavə məlumat" },
    { value: "read", label: "Oxudum" },
  ];

  const reactSelectStyles = {
    control: () => ({
      borderColor: "#D5DFEF",
    }),
    menuList: (base: CSSObjectWithLabel) => ({
      ...base,
      maxHeight: "125px",
    }),
    option: (base: CSSObjectWithLabel) => ({
      ...base,
      color: "#5B656FCC",
    }),
    placeholder: (base: CSSObjectWithLabel) => ({
      ...base,
      color: "#5B656FCC",
    }),
    singleValue: (base: CSSObjectWithLabel) => ({
      ...base,
      color: "#5B656FCC",
    }),
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed z-40 left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50"
    >
      <div
        ref={modalRef}
        className="fixed z-50 center-non-static w-[1000px] rounded-[4px] overflow-hidden"
      >
        <div className="p-10 bg-white h-[90vh] overflow-y-auto">
          <div className="mb-2 flex">
            <div className="w-11/12">
              <h2
                ref={modalHeading}
                className="font-bold text-[20px] leading-6"
              >
                2020-2025-ci ilə kimi Korporativ Strategiya Performans
                göstəricilərinin yaxşılaşdırılması layihəsi
              </h2>
            </div>
            <div className="w-1/12 flex justify-end">
              <div onClick={onCloseModal} className="w-[16px] cursor-pointer">
                <img className="w-full h-[16px]" src={times} alt="Times" />
              </div>
            </div>
          </div>

          <h6 className="mb-2 -ml-10 leading-4 bg-royal-blue pl-10 py-1 pr-3 rounded-r-[4px] relative inline-block text-white text-[14px">
            Dərkənar sahibi: <span className="font-semibold">Ad Soyad</span>
          </h6>

          <p className="mb-2 text-[15px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt lorem ipsum dolor sit amet consectetur
            adipiscing elit sed do eiusmod tempor incididunt lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt lorem ipsum dolor sit amet consectetur adipiscing elit
            sed do eiusmod tempor incididunt
          </p>

          <div>
            <h5 className="mb-2 text-[18px] font-bold leading-6">
              İcra vəziyyəti
            </h5>
            <div>
              <div className="flex">
                <div>
                  <span className="priority priority-low w-[10px] h-[10px]"></span>
                </div>
                <div className="ml-2">
                  <div className="mb-2 flex items-baseline">
                    <h6 className="font-semibold leading-4">Mərhələ 1</h6>
                    <span className="text-[14px] font-semibold text-shuttle-gray-50 ml-2 leading-6">
                      11.03.2024
                    </span>
                  </div>
                  <p className="mb-2 text-[15px] leading-[22px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt lorem ipsum dolor sit amet
                    consectetur adipiscing elit sed do eiusmod tempor incididun
                  </p>
                  <h6 className="mb-2 text-[14px] text-shuttle-gray-70 leading-6">
                    Cavabdeh şəxs
                    <span className="inline-block ml-2 text-shuttle-gray-normal font-semibold">
                      Ad Soyad
                    </span>
                  </h6>
                  <ul className="mb-2 inline-block">
                    <li>
                      <a href="#" className="flex items-center">
                        <div className="w-[14px]">
                          <img
                            className="w-full h-[14px]"
                            src={paperclip}
                            alt="Paperclip"
                          />
                        </div>
                        <span className="inline-block ml-2 text-[14px] font-semibold underline leading-[22px]">
                          Attachment 1
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center">
                        <div className="w-[14px]">
                          <img
                            className="w-full h-[14px]"
                            src={paperclip}
                            alt="Paperclip"
                          />
                        </div>
                        <span className="inline-block ml-2 text-[14px] font-semibold underline leading-[22px]">
                          Attachment 2
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col">
              <ReactSelect
                className="mb-2"
                placeholder={"Məruzə edin"}
                options={reactSelectOptions}
                styles={reactSelectStyles}
              />

              <textarea
                className="inline-block mb-2 cont cont-p-v h-[80px] resize-none w-full border border-solid border-gainsboro rounded-[4px] outline-none"
                rows={4}
                placeholder="Sizin şərhiniz"
              ></textarea>

              <button
                type="submit"
                className="inline-block text-white bg-royal-blue font-semibold w-[140px] h-[35px] text-[13px] rounded-[4px]"
              >
                Göndər
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalTask;
