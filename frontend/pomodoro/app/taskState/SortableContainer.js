import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const SortableContainer = ({ id, items, label }) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  let titleStyle = "";
  switch (id) {
    case "container1":
      titleStyle = "bg-blue-100";
      break;
    case "container2":
      titleStyle = "bg-red-100";
      break;
    case "container3":
      titleStyle = "bg-green-100";
      break;
    default:
  }
  return (
    <div className="issue-item">
      <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
        <div
          ref={setNodeRef}
          className="w-full border-2 border-gray-500/75 p-5 mt-2 rounded-md"
        >
          <div className={`issue-title-container ${titleStyle}`}>
            <h3 className="text-xl font-bold text-center">{label}</h3>
          </div>
          {items.map((id) => (
            <SortableItem key={id.id} id={id.id} name={id.name} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default SortableContainer;
