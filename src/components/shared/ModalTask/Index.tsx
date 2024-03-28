import times from "../../../assets/svg/times.svg";
import paperclip from "../../../assets/svg/paperclip.svg";

const ModalTask = () => {
  return (
    <div className="fixed center-non-static w-[1000px] z-50">
      <div className="p-10 bg-white rounded-[4px]">
        <div className="flex items-start">
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
        <h6>
          Dərkənar sahibi: <span>Ad Soyad</span>
        </h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt lorem ipsum dolor sit amet consectetur adipiscing
          elit sed do eiusmod tempor incididunt lorem ipsum dolor sit amet
          consectetur adipiscing elit sed do eiusmod tempor incididunt lorem
          ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
          incididunt
        </p>

        <h5>İcra vəziyyəti</h5>

        <div>
          <div>
            <div className="flex items-center">
              <span className="priority priority-low w-[10px] h-[10px]"></span>
              <h6>Mərhələ 1</h6>
              <span>11.03.2024</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt lorem ipsum dolor sit amet consectetur
              adipiscing elit sed do eiusmod tempor incididun
            </p>
            <h6>
              Cavabdeh şəxs <span>Ad Soyad</span>
            </h6>
            <ul>
              <li>
                <a href="#" className="flex items-center">
                  <div>
                    <img src={paperclip} alt="Paperclip" />
                  </div>
                  <span>Attachment 1</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <div>
                    <img src={paperclip} alt="Paperclip" />
                  </div>
                  <span>Attachment 2</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center">
              <span className="priority priority-low w-[10px] h-[10px]"></span>
              <h6>Mərhələ 2</h6>
              <span>11.03.2024</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt lorem ipsum dolor sit amet consectetur
              adipiscing elit sed do eiusmod tempor incididun
            </p>
            <h6>
              Cavabdeh şəxs <span>Ad Soyad</span>
            </h6>
            <ul>
              <li>
                <a href="#" className="flex items-center">
                  <div>
                    <img src={paperclip} alt="Paperclip" />
                  </div>
                  <span>Attachment 1</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form>
          <div className="flex items-center justify-center">
            <select className="appearance-none bg-white border border-gray-400 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500">
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <textarea
              id="message"
              className="resize-none border rounded-md w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              rows={4}
              placeholder="Enter your message here..."
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalTask;
