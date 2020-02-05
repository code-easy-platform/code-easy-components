import React, { Component } from 'react'

import { TreeManager, TreeItensTypes } from 'code-easy'

export default class App extends Component {
  render() {
    return (
      <div>
        <TreeManager
            onClick={(id) => { /* alert(id)  */ }}
            itemBase={{ itemId: "0", itemLabel: "Item 01", isSelected: false, itemChilds: [], itemType: TreeItensTypes.folder, nodeExpanded: false }}
            onContextMenu={(itemId, e) => { e.preventDefault() }}
            onDoubleClick={(itemId, item, e) => { alert(itemId) }}
        />
      </div>
    )
  }
}
