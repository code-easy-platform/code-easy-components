import * as React from 'react';

import { TreeItensTypes } from './shared/models/TreeItensTypes';
import { TreeInterface } from './shared/models/TreeInterface';
import { Tree } from './shared/components/Tree';
import styles from './TreeManager.css';

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
    state: ""
  }

  private onSelect = (id: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({ state: id });
    this.onClick(id, item, e);
  }

  render() {
    return (
      <div className={styles.treeBase}>
        <Tree
          item={{
            itemId: this.itemBase.itemId,
            itemLabel: this.itemBase.itemLabel,
            itemChilds: this.itemBase.itemChilds,
            itemType: TreeItensTypes.folder,
            isSelected: this.itemBase.isSelected,
            nodeExpanded: this.itemBase.nodeExpanded,
          }}
          paddingLeft={5}
          onClick={this.onSelect}
          itemIdSelected={this.state.state}
          onContextMenu={this.onContextMenu}
          onDoubleClick={this.onDoubleClick}
        />
        <div style={{ paddingBottom: 100 }} />
      </div>
    );
  }

}
