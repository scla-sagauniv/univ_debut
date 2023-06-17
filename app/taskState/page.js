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
import IssueForm from "./IssueForm";
import Header from "../../components/Header";

// 汚いコードでごめんなさい まる


const Container = () => {
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

  // どのコンテナに居るのか取得する関数
  const findContainer = (id) => {
    // もしコンテナの中にidが無い時でもitemsの中にidがあればそれを返す
    // これをしないとドラッグしたリソースがコンテナの中に無い時にエラーが出る。
    // どういう理屈で動いてるのか確実にはわからないが、
    // 恐らくこの関数でコンテナの中にidが無い時に、event.over.idが出力される時間が少し遅れるので
    // とりあえず、idを返して無限ループさせて時間を稼ぐためにやっていると考えている。

    if (id in items) {
      return id;
    }

    const containerKeys = Object.keys(items);
    for (const key of containerKeys) {
      const container = items[key];
      const foundItem = container.find((item) => item.id === id);
      if (foundItem) {
        return key.toString();
      }
    }
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
    console.log("aaa"+over?.id);

    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    // container1,container2,container3のいずれかを持つ
    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

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

        // 配列のインデックス取得
        const activeIndex = activeItems.findIndex((item) => item.id === id);
        const overIndex = overItems.findIndex((item) => item.id === overId);

        let newIndex;
        if (overId in prev[overContainer]) {
          // 下以外の要素にドロップした場合
          newIndex = overItems.length + 1;
        } else {
          // containerの最後の要素にドロップした場合
          const isBelowLastItem = over && overIndex === overItems.length - 1;
  
          const modifier = isBelowLastItem ? 1 : 0;
  
          newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
        }
        
        // 移動元の配列と移動先の配列の状態を反映したprevをreturnしてsetItemsに渡す
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

    // ドロップ時にリストの要素をとっかえひっかえのアレコレ
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

  // itemsの状態確認用、idを返す
  const list1 = items.container1.map((item) => item.id);
  const list2 = items.container2.map((item) => item.id);
  const list3 = items.container3.map((item) => item.id);

  console.log(list1);
  console.log(list2);
  console.log(list3);

  return (
    <main className="">
      <Header />
      <div className="container">
        <h1 className='issue-title'>ISSUEリスト</h1>
        <div className="issue-form">
          <IssueForm />
        </div>
        <div className="issue-container">
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
              label="ToDo"
              items={items.container1}
            />
            <SortableContainer
              id="container2"
              label="Doing"
              items={items.container2}
            />
            <SortableContainer
              id="container3"
              label="Done"
              items={items.container3}
            />
            {/* DragOverlay */}
            <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
          </DndContext>
        </div>
      </div>
    </main>
  );
};

export default Container;
