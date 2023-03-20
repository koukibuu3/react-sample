import React from 'react'
import { Helmet } from 'react-helmet'

import ComponentPropsApp from '8-2_component_props/App'
import ComponentStateApp from '8-3_component_state/App'
import ComponentStateCounter from '8-3_component_state/Counter'
import ComponentLifecycleTimer from '8-4_component_lifecycle/Timer'
import HooksHocCounter from '9-1_hooks_hoc/Counter'
import HooksStateCounter from '9-2_hooks_state/Counter'
import HooksEffectTimer from '9-3_hooks_effect/Timer'
import HooksMemoizeTimer2 from '9-4_hooks_memoize/Timer2'
import HooksMemoizeTimer3 from '9-4_hooks_memoize/Timer3'
import HooksCustomTimer from '9-5_hooks_custom/Timer'
import HooksCustomTimer2 from '9-5_hooks_custom/containers/Timer'

const Home: React.VFC = () => (
  <>
    <Helmet>
      <title>Home | React Playground</title>
    </Helmet>
    <h1>りあクト! TypeScriptで始めるつらくないReact開発</h1>
    <div className="ui two column grid">
      <div className="column">
        <h2 className="ui header">8-2. コンポーネントとProps</h2>
        <ComponentPropsApp />
      </div>
      <div className="column">
        <h2 className="ui header">8-3. コンポーネントで学ぶState</h2>
        <ComponentStateApp />
      </div>
      <div className="column">
        <h2 className="ui header">8-3. コンポーネントで学ぶState</h2>
        <ComponentStateCounter />
      </div>
      <div className="column">
        <h2 className="ui header">8-4. コンポーネントのライフサイクル</h2>
        <ComponentLifecycleTimer />
      </div>
    </div>
    <div className="ui two column grid">
      <div className="column">
        <h2 className="ui header">9-1. Hooksに至るまでの物語</h2>
        <HooksHocCounter max={100} />
      </div>
      <div className="column">
        <h2 className="ui header">9-2. HooksでStateを扱う</h2>
        <HooksStateCounter />
      </div>
      <div className="column">
        <h2 className="ui header">9-3. Hooksで副作用を扱う</h2>
        <HooksEffectTimer limit={90} />
      </div>
      <div className="column">
        <h2 className="ui header">9-4. Hooksにおけるメモ化を理解する</h2>
        <HooksMemoizeTimer2 limit={90} />
      </div>
      <div className="column">
        <h2 className="ui header">9-4. Hooksにおけるメモ化を理解する</h2>
        <HooksMemoizeTimer3 limit={90} />
      </div>
      <div className="column">
        <h2 className="ui header">
          9-5. Custom Hookでロジックを分離・再利用する
        </h2>
        <HooksCustomTimer limit={90} />
      </div>
      <div className="column">
        <h2 className="ui header">
          9-5. Custom Hookでロジックを分離・再利用する
        </h2>
        <HooksCustomTimer2 limit={90} />
      </div>
    </div>
  </>
)

export default Home
