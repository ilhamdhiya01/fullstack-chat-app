/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import classNames from "classnames";
import type { MouseEvent } from "react";

import type { DropdownItemProps } from ".";

interface DropdownItemPropsWithData extends DropdownItemProps {
  data?: any;
}

const DropdownItem = ({
  disabled,
  label,
  onSelect,
  icon,
  data,
}: DropdownItemPropsWithData) => (
  <li className="dropdown-item">
    <div
      onClick={(event: MouseEvent) => {
        if (onSelect) onSelect(event, data);
      }}
      className={classNames(
        "leading-none flex items-center cursor-pointer relative",
        {
          "opacity-50 pointer-events-none": disabled,
        },
      )}
    >
      {icon && <>{icon}</>}
      {label}
    </div>
  </li>
);

export default DropdownItem;
