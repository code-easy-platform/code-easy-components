import React, { useState } from 'react'

import 'code-easy-components/dist/index.css';
import {
  IconComplete, IconConfig, IconHelp, IconImport, IconInfo, IconMinimize, IconOpenGithub, IconPlugins, InputViewOnly, useSizeByText,
  IconFolder, IconDownload, IconAction, IconInputParam, IconRouter, IconOutpuParam, IconLocalParam, IconAccont, IconError, useAngle,
  IconMoreInfo, IconMaximize, IconMenu, IconMenuUser, IconPlay, IconPluginsTab, IconPropertiesTab, IconRestart, IconStop, useHypotenuse,
  IconFlowAction, IconFlowAssign, IconFlowComment, IconFlowEnd, IconFlowForeach, IconFlowIf, IconFlowStart, IconFlowSwitch, IconRouterExpose,
  IconStar, IconTips, IconTrash, IconWarning, IconBuild, IconClose, IconCollapsedFolder, IconEditorTab, IconExpandedFolder, IconRouterConsume,
} from 'code-easy-components';

const App = () => {
  const [inputWidth, setInputWidth] = useState(60);
  return <div>
    <div style={{ margin: 100, padding: 20, backgroundColor: '#1e1e1e' }}>
      <header style={{ color: 'white' }}>Icons</header>
      <div>
        <img style={{ margin: 5 }} width={20} height={20} src={IconFlowComment} alt="" />
        <img style={{ margin: 5 }} width={20} height={20} src={IconFlowForeach} alt="" />
        <img style={{ margin: 5 }} width={20} height={20} src={IconFlowAction} alt="" />
        <img style={{ margin: 5 }} width={20} height={20} src={IconFlowAssign} alt="" />
        <img style={{ margin: 5 }} width={20} height={20} src={IconFlowSwitch} alt="" />
        <img style={{ margin: 5 }} width={20} height={20} src={IconFlowStart} alt="" />
        <img style={{ margin: 5 }} width={20} height={20} src={IconFlowEnd} alt="" />
        <img style={{ margin: 5 }} width={20} height={20} src={IconFlowIf} alt="" />
      </div>
      <img style={{ margin: 5 }} width={20} height={20} src={IconCollapsedFolder} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconExpandedFolder} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconPropertiesTab} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconRouterConsume} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconRouterExpose} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconLocalParam} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconInputParam} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconOutpuParam} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconOpenGithub} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconPluginsTab} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconEditorTab} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconMoreInfo} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconMaximize} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconComplete} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconDownload} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconMinimize} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconMenuUser} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconRestart} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconPlugins} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconWarning} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconRouter} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconAction} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconAccont} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconFolder} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconConfig} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconImport} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconError} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconBuild} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconTrash} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconClose} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconHelp} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconInfo} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconStar} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconTips} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconMenu} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconPlay} alt="" />
      <img style={{ margin: 5 }} width={20} height={20} src={IconStop} alt="" />
    </div>
    <div style={{ margin: 100, padding: 20, backgroundColor: '#1e1e1e', color: 'white' }}>
      <header style={{ color: 'white' }}>Inputs</header>
      <br />
      <div style={{ width: 300, padding: 20, boxShadow: '0 0 4px black' }}>
        <InputViewOnly
          label={"Label"}
          infoIcon={IconHelp}
          inputWidth={inputWidth}
          onChangeInputWidth={newWidth => setInputWidth(newWidth)}
          value={"Valor da minha input"}
          information={"Valor da minha information"}
        />
        <br />
      </div>
    </div>
    <div style={{ margin: 100, padding: 20, backgroundColor: '#1e1e1e', color: 'white' }}>
      <header style={{ color: 'white' }}>React hooks</header>
      <br />
      <div>
        <b>Angle</b><br />
        X1: 100<br />
        Y1: 100<br />
        X2: 200<br />
        Y2: 200<br />
        Angle: {useAngle(100, 100, 200, 200)}
        <br />
        <br />
        <b>Hypotenuse</b><br />
        height: 100<br />
        width: 200<br />
        Hypotenuse: {useHypotenuse(100, 200)}<br /><br />
        <b>Sizes(width e height) by text</b><br />
        Text: "My test \n\n\n\n text"<br />
        height: {useSizeByText("My test \n\n\n\n text").height}<br />
        width: {useSizeByText("My test \n\n\n\n text").width}<br />
      </div>
    </div>
  </div>
}

export default App;
