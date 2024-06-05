import { DndContext } from '@dnd-kit/core'
import './App.css'
import { ItemList } from './components/ItemList'
import { RecursiveItem } from './types/RecursiveItem'

const INITIAL_ITEMS: RecursiveItem[] = [
  {
    id: crypto.randomUUID(),
    name: 'item 1',
    children: [
      { id: crypto.randomUUID(), name: 'item 1.1' },
      { id: crypto.randomUUID(), name: 'item 1.2' },
      {
        id: crypto.randomUUID(),
        name: 'item 1.3',
        children: [
          { id: crypto.randomUUID(), name: 'item 1.3.1' },
          { id: crypto.randomUUID(), name: 'item 1.3.2' },
        ],
      },
      { id: crypto.randomUUID(), name: 'item 1.4' },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: 'item 2',
    children: [
      { id: crypto.randomUUID(), name: 'item 2.1' },
      { id: crypto.randomUUID(), name: 'item 2.2' },
      { id: crypto.randomUUID(), name: 'item 2.3' },
    ],
  },
  { id: crypto.randomUUID(), name: 'item 3' },
  { id: crypto.randomUUID(), name: 'item 4' },
  { id: crypto.randomUUID(), name: 'item 5' },
]

const App = () => {
  return (
    <DndContext>
      <ItemList items={INITIAL_ITEMS} />
    </DndContext>
  )
}

export default App
