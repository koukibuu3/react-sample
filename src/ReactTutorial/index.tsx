import React from 'react'
import Game from 'ReactTutorial/components/Game'

const index = () => (
  <div>
    <h1>React 公式チュートリアル</h1>
    <div className="ui two column grid">
      <div className="column">
        <h2 className="ui header">概要</h2>
        <Game />
      </div>
    </div>
  </div>
)

export default index
