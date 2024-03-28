import classNames from "classnames";

import { BadgeTypesEnum } from "../../../types/enums/Badge.enum";
import { BadgePropTypes } from "../../../types/interfaces/Badge.type";

import "./index.scss";

const Badge = ({ content, type }: BadgePropTypes) => {
  const badgeClass = classNames("badge", {
    "badge-confirm": type === BadgeTypesEnum.Confirm,
    "badge-decision": type === BadgeTypesEnum.Decision,
    "badge-comment": type === BadgeTypesEnum.Comment,
  });

  return <span className={badgeClass}>{content}</span>;
};

export default Badge;
