import * as React from 'react';
import { TreeInterface } from '../../models/TreeInterface';

import { TreeItensTypes } from '../../models/TreeItensTypes';
import { Icon } from '../icon/icon';
import styles from './TreeItem.css';

interface ItemTreeProps {
    paddingLeft: number,
    itemTree: TreeInterface,
    onSelect(itemTreeId: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
    onDoubleClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
    onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
}
export const TreeItem: React.FC<ItemTreeProps> = ({ itemTree, paddingLeft, onSelect, onContextMenu, onDoubleClick }) => {

    // Vai mandar para fora da arvore qual o id do item que foi clicado.
    const onContext = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onContextMenu(itemTree.itemId, e);
    }

    return (
        <div
            className={styles.treeItem}
            key={itemTree.itemId}
            onContextMenu={onContext}
            id={"tree_" + itemTree.itemId}
            onClick={(e: any) => onSelect(itemTree.itemId, e)}
            onDoubleClick={e => { onDoubleClick(itemTree.itemId, itemTree, e) }}
            style={{ backgroundColor: (itemTree.isSelected ? "#6060a730" : "") }}
        >
            <div style={{ padding: "5px", paddingLeft: `${paddingLeft}px` }}>
                {itemTree.itemType === TreeItensTypes.folder &&
                    <Icon iconName={itemTree.nodeExpanded ? "collapse" : "expand"} />
                }
                {itemTree.itemType === TreeItensTypes.file &&
                    <Icon />
                }
                {itemTree.itemLabel}
            </div>
        </div>
    );
}
