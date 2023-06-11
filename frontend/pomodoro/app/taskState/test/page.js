"use client"
import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import SortableContainer from "./SortableContainer";
import Item from "./Item";

const Contaienr = () => {
  // ドラッグ&ドロップでソート可能なリスト
  const [items, setItems] = useState({
    container1: [{
      id: 1,
      name: "A",
    }, {
      id: 2,
      name: "B",
    }, {
      id: 3,
      name: "C",
    }, {
      id: 10,
      name: "J",
    }],

    container2: [{
      id: 4,
      name: "D",
    }, {
      id: 5,
      name: "E",
    }, {
      id: 6,
      name: "F",
    }],

    container3: [{
      id: 7,
      name: "G",
    }, {
      id: 8,
      name: "H",
    }, {
      id: 9,
      name: "I",
    }],
  });

  //リストのリソースid（リストの値）
  const [activeId, setActiveId] = useState();

  // ドラッグの開始、移動、終了などにどのような入力を許可するかを決めるprops
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // 各コンテナ取得関数
  // const findContainer = (id) => {
  //   if (id in items) {
  //     return id;
  //   }
  //   return Object.keys(items).find((key) =>
  //     items[key].includes(id)
  //   );
  // };

  const findContainer = (id) => {
    const containerKeys = Object.keys(items);
    console.log(items[containerKeys]);
    for (const key of containerKeys) {
      const container = items[key];
      const foundItem = container.find((item) => item.id === id);
      if (foundItem) {
        return key.toString();
      }
    }
    for (const key of containerKeys) {
      if (0 === items[key].length) {
        return key.toString();
      }
    }
    return null;
  };

  // ドラッグ開始時に発火する関数
  const handleDragStart = (event) => {
    const { active } = event;
    //ドラッグしたリソースのid
    const id = active.id;
    setActiveId(id);
  };

  //ドラッグ可能なアイテムがドロップ可能なコンテナの上に移動時に発火する関数
  const handleDragOver = (event) => {
    const { active, over } = event;
    //ドラッグしたリソースのid
    const id = active.id;
    //ドロップした場所にあったリソースのid
    const overId = over?.id;

    console.log(event);
    console.log(id);
    console.log(overId);

    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    // container1,container2,container3のいずれかを持つ
    // overContainerはcontainerの中が空の場合にnullになるから直接指定
    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id);

    console.log("activeContainer is"+activeContainer);
    console.log("overContainer is"+overContainer);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
      ) {
      // コンテナが同じ場合
      console.log("finn");
      return;
    }

    // コンテナが異なる場合
      setItems((prev) => {
        // 移動元のコンテナの要素配列を取得
        const activeItems = prev[activeContainer];
        // 移動先のコンテナの要素配列を取得
        const overItems = prev[overContainer];

        console.log("activeItems is"+activeItems);
        console.log("overItems is"+overItems);

        // 配列のインデックス取得
        const activeIndex = activeItems.findIndex((item) => item.id === id);
        const overIndex = overItems.findIndex((item) => item.id === overId);

        console.log("activeIndex is"+activeIndex);
        console.log("overIndex is"+overIndex);
  
        let newIndex;
        console.log("overId is"+overId);
        if (overId in prev[overContainer]) {
          // 下以外の要素にドロップした場合
          newIndex = overItems.length + 1;
        } else {
          // containerの最後の要素にドロップした場合
          const isBelowLastItem = over && overIndex === overItems.length - 1;
  
          const modifier = isBelowLastItem ? 1 : 0;
  
          newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
        }
  
        return {
          ...prev,
          [activeContainer]: [
            ...prev[activeContainer].filter((item) => item.id !== active.id),
          ],
          [overContainer]: [
            ...prev[overContainer].slice(0, newIndex),
            items[activeContainer][activeIndex],
            ...prev[overContainer].slice(newIndex, prev[overContainer].length),
          ],
        };
      });
  };

  // ドラッグ終了時に発火する関数
  const handleDragEnd = (event) => {
    const { active, over } = event;
    //ドラッグしたリソースのid
    const id = active.id;
    //ドロップした場所にあったリソースのid
    const overId = over?.id;

    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    // container1,container2,container3のいずれかを持つ
    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    // 配列のインデックス取得
    const activeIndex = items[activeContainer].findIndex((item) => item.id === id);
    const overIndex = items[overContainer].findIndex((item) => item.id === overId);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }
    setActiveId(undefined);
  };

  console.log(items["container1"].findIndex((item) => item.id === 2));

  const list1 = items.container1.map((item) => item.id);
  const list2 = items.container2.map((item) => item.id);
  const list3 = items.container3.map((item) => item.id);

  console.log(list1);
  console.log(list2);
  console.log(list3);
  return (
    <div className="flex flex-row mx-auto">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {/* SortableContainer */}

        <SortableContainer
          id="container1"
          label="container1"
          items={items.container1}
        />
        <SortableContainer
          id="container2"
          label="container2"
          items={items.container2}
        />
        <SortableContainer
          id="container3"
          label="container3"
          items={items.container3}
        />
        {/* DragOverlay */}
        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};

export default Contaienr;
