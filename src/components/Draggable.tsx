import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

type Props = {
  uniqueId: string
  children: React.ReactNode
}

export const Draggable: React.FC<Props> = ({ uniqueId, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: uniqueId,
  })
  const style = {
    transform: CSS.Transform.toString(transform),
  }

  return (
    <button ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </button>
  )
}
