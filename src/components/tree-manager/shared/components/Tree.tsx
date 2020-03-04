import * as React from 'react';
import { TreeInterface } from '../models/TreeInterface';
import { TreeItem } from './tree-item/TreeItem';

interface TreeProps {
  item: TreeInterface;
  paddingLeft: number;
  onClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
  onDoubleClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
  onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
  itemIdSelected: string;
}
export class Tree extends React.Component<TreeProps> {
  private onClick = this.props.onClick;
  private paddingLeft = this.props.paddingLeft;
  private onContextMenu = this.props.onContextMenu;
  private onDoubleClick = this.props.onDoubleClick;

  state: any = {
    item: {
      itemId: this.props.item.itemId,
      itemLabel: this.props.item.itemLabel,
      isSelected: this.props.item.itemId === this.props.itemIdSelected,
      nodeExpanded: this.props.item.nodeExpanded,
      itemType: this.props.item.itemType,
      itemChilds: this.props.item.itemChilds
    }
  }

  render() {
    this.state.item.isSelected = (this.props.item.itemId === this.props.itemIdSelected);

    return (
      <>
        <TreeItem
          onContextMenu={this.onContextMenu}
          onDoubleClick={this.onDoubleClick}
          paddingLeft={this.paddingLeft}
          itemTree={this.state.item}
          onSelect={(_, e) => {
            this.setState({
              item: {
                ...this.state.item,
                nodeExpanded: !this.state.item.nodeExpanded
              }
            });
            this.onClick(this.state.item.itemId, this.state.item, e);
          }}
        />
        {this.state.item.nodeExpanded &&
          this.state.item.itemChilds.map((item: TreeInterface) => {
            return (<Tree onDoubleClick={this.onDoubleClick} itemIdSelected={this.props.itemIdSelected} onContextMenu={this.onContextMenu} onClick={this.onClick} paddingLeft={this.paddingLeft + 10} item={item} />);
          })}
      </>
    );
  }
}
