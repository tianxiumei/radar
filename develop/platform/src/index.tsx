import React from 'react'
import ReactDOM from 'react-dom'
import VisualizationStore from 'radar'
import * as inputRuleFuncs from 'radar'
/* eslint import/no-webpack-loader-syntax: off */
import VisualizationStyle from '!!raw-loader!radar/dist/index.css'
/* eslint import/no-webpack-loader-syntax: off */
import visualizationConfigForm from '!!raw-loader!radar/dist/form.xml'
import { account } from '../package.json'

const App = () => {
  return global['__Pandora__VisualizationAppRender'](
    VisualizationStore,
    visualizationConfigForm,
    VisualizationStyle,
    inputRuleFuncs,
    account
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
