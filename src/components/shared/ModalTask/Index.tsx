import ReactSelect from "react-select";

import times from "../../../assets/svg/times.svg";
import paperclip from "../../../assets/svg/paperclip.svg";

const ModalTask = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="fixed center-non-static w-[1000px] z-50">
      <div className="p-10 bg-white rounded-[4px]">
        <div className="mb-2 flex items-start">
          <div className="w-11/12">
            <h2 className="font-bold text-[20px]">
              2020-2025-ci ilə kimi Korporativ Strategiya Performans
              göstəricilərinin yaxşılaşdırılması layihəsi
            </h2>
          </div>
          <div className="w-1/12 flex justify-end">
            <div className="w-[16px] cursor-pointer">
              <img className="w-full h-[16px]" src={times} alt="Times" />
            </div>
          </div>
        </div>

        <h6 className="mb-2 -ml-10 bg-royal-blue pl-10 py-1 pr-3 rounded-r-[4px] relative inline-block text-white text-[14px">
          Dərkənar sahibi: <span className="font-semibold">Ad Soyad</span>
        </h6>

        <p className="mb-2 text-[15px] leading-[24px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt lorem ipsum dolor sit amet consectetur adipiscing
          elit sed do eiusmod tempor incididunt lorem ipsum dolor sit amet
          consectetur adipiscing elit sed do eiusmod tempor incididunt lorem
          ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
          incididunt
        </p>

        <div>
          <h5 className="mb-2 text-[18px] font-bold">İcra vəziyyəti</h5>
          <div>
            <div className="flex">
              <div>
                <span className="priority priority-low w-[10px] h-[10px]"></span>
              </div>
              <div className="ml-2">
                <div className="mb-2 flex items-end">
                  <h6 className="font-semibold">Mərhələ 1</h6>
                  <span className="text-[14px] font-semibold text-shuttle-gray-50 ml-2">
                    11.03.2024
                  </span>
                </div>
                <p className="mb-2 text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt lorem ipsum dolor sit amet
                  consectetur adipiscing elit sed do eiusmod tempor incididun
                </p>
                <h6 className="mb-2 text-[14px] text-shuttle-gray-70">
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
                      <span className="inline-block ml-2 text-[14px] font-semibold underline">
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
                      <span className="inline-block ml-2 text-[14px] font-semibold underline">
                        Attachment 2
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <ReactSelect
              className="mb-2"
              placeholder={"Məruzə edin"}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#D5DFEF",
                  boxShadow: "none",
                  "&:hover": {
                    outline: "none",
                  },
                }),
                menuList: (base) => ({
                  ...base,
                  maxHeight: "125px",
                }),
                option: (base) => ({
                  ...base,
                  color: "#5B656FCC",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#5B656FCC",
                }),
                indicatorSeparator: (base) => ({
                  ...base,
                  display: "none",
                }),
              }}
            />

            <textarea
              className="mb-2 cont cont-p-v h-[80px] resize-none w-full border border-solid border-gainsboro rounded-[4px] outline-none"
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
  );
};

export default ModalTask;
