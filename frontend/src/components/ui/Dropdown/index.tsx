/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

import DropdownItem from "./DropdownItem";
import DropdownSeparator from "./DropdownSeparator";

export interface DropdownItemProps {
  type?: "item" | "separator";
  label?: string;
  // onSelect?: (event: MouseEvent, data?: any) => Promise<boolean | void>;
  onSelect?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
}

interface DropdownProps {
  triggerChildren: ReactNode;
  menuItems: Array<DropdownItemProps>;
  align?: "end";
  side?: "top" | "right" | "bottom" | "left";
  // data?: any;
}

const Dropdown = ({
  menuItems,
  triggerChildren,
  align,
  // data,
  side,
}: DropdownProps) => {
  const dropdown = tv({
    base: "dropdown",
    variants: {
      side: {
        top: "dropdown-top",
        right: "dropdown-right",
        bottom: "dropdown-bottom",
        left: "dropdown-left",
      },
      align: {
        end: "dropdown-end",
      },
    },
  });

  return (
    <div
      className={dropdown({
        side,
        align,
      })}
    >
      <div tabIndex={0}>{triggerChildren}</div>
      <ul
        tabIndex={0}
        className="dropdown-content border menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {menuItems.map((item, index) => {
          switch (item.type) {
            case undefined:
            case "item":
              return <DropdownItem key={index} {...item} />;

            case "separator":
              return <DropdownSeparator key={index} />;
            default:
              return null;
          }
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
