import { BadgePropTypes } from "../../../types/interfaces/Badge.type";

import "./index.scss";

const Badge = ({ content, type }: BadgePropTypes) => {
  let badgeClass = "badge";

  switch (type) {
    case 0:
      badgeClass += " badge-confirm";
      break;
    case 1:
      badgeClass += " badge-decision";
      break;
    case 2:
      badgeClass += " badge-comment";
      break;
    default:
      break;
  }

  return <span className={badgeClass}>{content}</span>;
};

export default Badge;
