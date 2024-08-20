/* eslint-disable react/prop-types */
const CollapsedSidebar = ({ logo, name }) => {
  return (
    <li className="flex h-14 mb-5 mt-2  rounded-lg items-center justify-center hover:bg-gray-100 cursor-pointer flex-col">
      {logo}
      <p className="text-[0.7rem]">{name}</p>
    </li>
  );
};

export default CollapsedSidebar;
