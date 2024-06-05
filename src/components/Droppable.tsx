import { useDroppable } from '@dnd-kit/core'

type Props = {
  uniqueId: string
  children?: React.ReactNode
}

/**
 * ドロップ可能な領域
 */
export const Droppable: React.FC<Props> = ({ uniqueId, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: uniqueId,
  })
  const style = {
    backgroundColor: isOver ? 'rgba(0, 255, 0, 0.3)' : undefined,
  }
  return (
    <span
      className="inline-block h-4 w-4 mx-1 bg-red-300"
      style={style}
      ref={setNodeRef}
    >
      {children}
    </span>
  )
}
