import { RecursiveItem } from '../types/RecursiveItem'
import { Draggable } from './Draggable'
import { Droppable } from './Droppable'

type Props = {
  items: RecursiveItem[]
  hierarchy?: number
}

export const ItemList: React.FC<Props> = ({ items, hierarchy = 1 }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {Array.from({ length: hierarchy }).map((_, i) => (
            <Droppable uniqueId={`${item.id}-${i}`} />
          ))}
          <Draggable uniqueId={item.id}>
            <span className="inline-block h-4 px-2">{item.name}</span>
          </Draggable>
          {item.children && (
            <ItemList items={item.children} hierarchy={hierarchy + 1} />
          )}
        </li>
      ))}
    </ul>
  )
}
