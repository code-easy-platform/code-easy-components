import * as React from 'react';

import { TreeItensTypes } from './shared/models/TreeItensTypes';
import { TreeInterface } from './shared/models/TreeInterface';
import { Tree } from './shared/components/Tree';
import './TreeManager.css';

interface TreeManagerProps {
  itemBase: TreeInterface,
  onClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
  onDoubleClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
  onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
}
export class TreeManager extends React.Component<TreeManagerProps> {

  private itemBase = this.props.itemBase;
  private onClick = this.props.onClick;
  private onContextMenu = this.props.onContextMenu;
  private onDoubleClick = this.props.onDoubleClick;

  state = {
    itemIdSelected: ""
  }

  private onSelect = (id: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    this.state.itemIdSelected = id;
    this.setState({ itemIdSelected: id });

    this.onClick(id, item, e);

  }

  render() {
    return (
      <div style={{ flexDirection: 'column', overflow: 'auto', flex: 1 }}>
        <Tree
          item={{
            itemId: this.itemBase.itemId,
            itemLabel: this.itemBase.itemLabel,
            itemChilds: this.itemBase.itemChilds,
            itemType: TreeItensTypes.folder,
            isSelected: this.itemBase.isSelected,
            nodeExpanded: this.itemBase.nodeExpanded,
          }}
          itemIdSelected={this.state.itemIdSelected}
          onContextMenu={this.onContextMenu}
          onDoubleClick={this.onDoubleClick}
          onClick={this.onSelect}
          paddingLeft={5}
        />
        <div style={{ paddingBottom: 100 }} />
      </div>
    );
  }

}
