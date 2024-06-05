import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { DndContext } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { FC } from 'react'
import { CSS } from '@dnd-kit/utilities'
import { RecursiveItem } from '../types/RecursiveItem'
// import { Box } from "@mui/material";

type Props = {
  item: RecursiveItem
  parentSetItems: (children: RecursiveItem[]) => void
}

export const DraggableItem: FC<Props> = ({ item, parentSetItems }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    // isDragging,
  } = useSortable({
    id: item.id,
  })
  // const [items, setItems] = useState<any[]>(children || []);

  // useEffect(() => {
  //   setParentItems(children || []);
  // }, [items])

  const setItems = (children: RecursiveItem[]) => {
    parentSetItems(children)
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <span>
        <span>{item.name}</span>
        {item?.children && (
          <DndContext
            onDragEnd={(event) => {
              const { active, over } = event
              if (over == null) {
                return
              }
              if (active.id !== over.id && item.children !== undefined) {
                const oldIndex = item.children.findIndex(
                  (child) => child.id === active.id,
                )
                const newIndex = item.children.findIndex(
                  (child) => child.id === over.id,
                )
                const newItems = arrayMove(item.children, oldIndex, newIndex)
                setItems(newItems)
              }
            }}
          >
            <SortableContext items={item.children}>
              <ul>
                {item.children.map((child) => (
                  <li key={child.id}>
                    <DraggableItem item={child} parentSetItems={setItems} />
                  </li>
                ))}
              </ul>
            </SortableContext>
          </DndContext>
        )}
      </span>
    </div>
  )
}
