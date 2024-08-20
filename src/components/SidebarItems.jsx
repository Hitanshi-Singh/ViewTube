/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SidebarItems = ({ logo, name, link }) => {
  return (
    <Link to={link}>
      {" "}
      <li className="flex h-10 my-2  rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
        {logo}
        <p className="w-9/12">{name}</p>
      </li>
    </Link>
  );
};

export default SidebarItems;
