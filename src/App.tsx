import React from 'react'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

import { Navigate, Route, Routes } from 'react-router'
import Home from 'components/pages/Home'
import Hooks from 'components/pages/Hooks'
import ReactTutorial from 'ReactTutorial'
import 'App.css'

const App: React.VFC = () => (
  <>
    <div className="container">
      <h1 className="ui header">
        りあクト! TypeScriptで始めるつらくないReact開発
      </h1>
      <div className="ui divider" />
      <nav>
        <List as="ul">
          <List.Item as="li">
            <Link to="/">Home</Link>
          </List.Item>
          <List.Item as="li">
            <Link to="hooks">Hooks</Link>
          </List.Item>
          <List.Item as="li">
            <Link to="react_tutorial">React 公式チュートリアル</Link>
          </List.Item>
        </List>
      </nav>
      <div className="ui divider" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hooks" element={<Hooks />} />
        {/* <Route path="characters" element={<Characters />}>
          <Route path="" element={<AllCharacters />} />
          <Route path=":schoolCode" element={<SchoolCharacters />} />
        </Route> */}
        <Route path="react_tutorial" element={<ReactTutorial />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </>
)

export default App
