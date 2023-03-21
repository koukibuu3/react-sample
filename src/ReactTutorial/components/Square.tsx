import React from 'react'

type Props = {
  value: string
  onClick: () => void
}

/**
 * 関数コンポーネント - renderメソッドだけ有して自分のstateを持たないコンポーネント
 */
function Square(props: Props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square
