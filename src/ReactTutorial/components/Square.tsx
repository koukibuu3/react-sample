import React from 'react'

type Props = {
  value: number
}

class Square extends React.Component<Props, { value: string | null }> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: this.props.value.toString(),
    }
  }

  render() {
    return (
      // MEMO: onClick={console.log('click')} とすると再レンダリングされるたびに実行される
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {/* MEMO: this.props.value を直接出力するのではなく this.state.value を出力する */}
        {this.state.value}
      </button>
    )
  }
}

export default Square
