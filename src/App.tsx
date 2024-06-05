import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import "./App.css";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { DraggableItem } from "./components/DraggableItem";
import { RecursiveItem } from "./types/RecursiveItem";
// import { SortableItemProp } from "./type/sortable";
// import { Stack, Box } from "@mui/material";

const INITIAL_ITEMS: RecursiveItem[] = [
  { id: crypto.randomUUID(), name: "item 1", children: [
    { id: crypto.randomUUID(), name: "item 1.1" },
    { id: crypto.randomUUID(), name: "item 1.2" },
    { id: crypto.randomUUID(), name: "item 1.3", children: [
      { id: crypto.randomUUID(), name: "item 1.3.1" },
      { id: crypto.randomUUID(), name: "item 1.3.2" },
    ]},
    { id: crypto.randomUUID(), name: "item 1.4"
    },
  ]},
  { id: crypto.randomUUID(), name: "item 2", children: [
    { id: crypto.randomUUID(), name: "item 2.1" },
    { id: crypto.randomUUID(), name: "item 2.2" },
    { id: crypto.randomUUID(), name: "item 2.3" },
  ]},
  { id: crypto.randomUUID(), name: "item 3" },
  { id: crypto.randomUUID(), name: "item 4" },
  { id: crypto.randomUUID(), name: "item 5" },
];

export default function App() {
  const [items, setItems] = useState<RecursiveItem[]>(INITIAL_ITEMS);

  const parentSetItems = (children: RecursiveItem[]) => {
    setItems(items.map((item) => {
      if (item.id === children[0].id) {
        return children[0];
      }
      return item;
    }
    ))
  }

  // const swapItems = (items: RecursiveItem[], sourceId: string, destinationId: string) => {
  //   const sourceIndex = items.findIndex((item) => item.id === sourceId);
  //   const destinationIndex = items.findIndex((item) => item.id === destinationId);
  //   const newItems = [...items];
  //   newItems[sourceIndex] = items[destinationIndex];
  //   newItems[destinationIndex] = items[sourceIndex];
  //   return newItems;
  // }

  return (
    <div className="App">
      <div>
        <div>
          <DndContext
            onDragEnd={(event) => {
              const { active, over } = event;
              if (over == null) {
                return;
              }
              if (active.id !== over.id) {
                setItems((items) => {
                  const oldIndex = items.findIndex(
                    (item) => item.id === active.id
                  );
                  const newIndex = items.findIndex(
                    (item) => item.id === over.id
                  );
                  return arrayMove(items, oldIndex, newIndex);
                });
              }
            }}
          >
            <SortableContext items={items}>
              <ul>
                {items.map((item) => (
                  <li>
                    <DraggableItem item={item} parentSetItems={parentSetItems} />
                  </li>
                ))}
              </ul>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
