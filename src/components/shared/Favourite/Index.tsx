import { useState } from "react";

import starBold from "../../../assets/svg/star-Bold.svg";
import starFilled from "../../../assets/svg/star-Filled.svg";

const Favourite = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <div
      className="w-[20%] mr-4 cursor-pointer"
      onClick={() => setIsFavourite(!isFavourite)}
    >
      <img
        src={isFavourite ? starFilled : starBold}
        alt="Favourite"
        className="w-full"
      />
    </div>
  );
};

export default Favourite;
