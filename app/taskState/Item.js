import { UniqueIdentifier } from "@dnd-kit/core";

const Item = ({ name }) => {
  return (
    <div className="w-full h-[50px] flex items-center justify-center my-2.5 border border-black rounded-lg bg-gray-100">
      {name}
    </div>
  );
};
export default Item;
