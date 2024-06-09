import { useMemo } from 'react'
import './App.css'
import {
  StaticTreeDataProvider,
  Tree,
  UncontrolledTreeEnvironment,
} from 'react-complex-tree'
import { IoIosArrowDown } from 'react-icons/io'
import { CgLoadbar } from 'react-icons/cg'
import { FaChevronDown } from 'react-icons/fa6'

const App = () => {
  const defaultItems = {
    root: {
      index: 'root',
      isFolder: true,
      children: ['child1'],
      data: 'Root item',
    },
    child1: {
      index: 'child1',
      isFolder: true,
      children: ['child2', 'child3'],
      data: '◯◯室',
    },
    child2: {
      index: 'child2',
      isFolder: true,
      children: [],
      data: 'XX機',
    },
    child3: {
      index: 'child3',
      isFolder: true,
      children: ['child4', 'child5'],
      data: '△△台',
    },
    child4: {
      index: 'child4',
      isFolder: true,
      children: ['child6', 'child7'],
      data: '◯材１',
    },
    child5: {
      index: 'child5',
      isFolder: true,
      children: ['child8'],
      data: '◯材２',
    },
    child6: {
      index: 'child6',
      children: [],
      data: '◯◯◯◯◯◯◯◯',
    },
    child7: {
      index: 'child7',
      children: [],
      data: '◯◯◯◯◯◯◯◯',
    },
    child8: {
      index: 'child8',
      children: [],
      data: 'XXXXXXXX',
    },
  }

  const items = useMemo(() => ({ ...defaultItems }), [])

  const dataProvider = useMemo(
    () =>
      new StaticTreeDataProvider(items, (item, data) => ({
        ...item,
        data,
      })),
    [items],
  )

  const injectItem = () => {
    const rand = `${Math.random()}`
    // @ts-expect-error - We are mutating the items object
    items[rand] = { data: 'New Item', index: rand }
    items.root.children.push(rand)
    dataProvider.onDidChangeTreeDataEmitter.emit(['root'])
  }

  return (
    <UncontrolledTreeEnvironment
      canDragAndDrop
      canDropOnFolder
      canReorderItems
      dataProvider={dataProvider}
      getItemTitle={(item) => item.data}
      viewState={{
        'tree-1': {
          expandedItems: [
            'root',
            'child1',
            'child3',
            'child4',
            'child5',
            'child6',
            'child7',
            'child8',
          ],
        },
      }}
      renderItemTitle={({ title }) => <span>{title}</span>}
      renderItemArrow={({ item, context }) =>
        item.isFolder ? (
          <span
            {...context.arrowProps}
            className="z-10 h-5 w-5 p-0.5 border text-center border-black bg-slate-100"
          >
            {context.isExpanded ? <FaChevronDown /> : <CgLoadbar />}
          </span>
        ) : null
      }
    >
      <button type="button" onClick={injectItem}>
        +
      </button>
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
    </UncontrolledTreeEnvironment>
  )
}

export default App
