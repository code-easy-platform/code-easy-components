import React, { Component } from 'react';

import { TreeManager, TreeItensTypes } from 'code-easy-components';
import { itensMock } from './mock';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ justifyContent: "center", flex: 1, display: "flex", }}>
          <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column" }}>

            <TreeManager
              onContextMenu={(itemId, e) => e.preventDefault()}
              onDoubleClick={() => { }}
              onClick={() => { }}
              itemBase={{
                itemId: '0',
                isSelected: false,
                nodeExpanded: false,
                itemChilds: itensMock,
                itemLabel: "Meu item base",
                itemType: TreeItensTypes.file,
              }}
            />

          </div>
        </div>
      </div>
    )
  }
}

