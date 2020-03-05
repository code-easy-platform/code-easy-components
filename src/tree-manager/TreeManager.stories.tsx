import * as React from 'react';

import { TreeItensTypes } from './shared/models/TreeItensTypes';
import { TreeManager } from './TreeManager';

/** MOCK */
const itensMock: any = [
    {
        itemId: "1", itemLabel: "Item 02", isSelected: false, itemChilds: [
            {
                itemId: "2", itemLabel: "Item 01", isSelected: false, itemChilds: [
                    {
                        itemId: "3", itemLabel: "Item 01", isSelected: false, itemChilds: [
                            {
                                itemId: "4", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                    {
                                        itemId: "5", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                            {
                                                itemId: "6", itemLabel: "Item 03", isSelected: false, itemChilds: [
                                                    {
                                                        itemId: "7", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                            {
                                                                itemId: "8", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                    {
                                                                        itemId: "9", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                            {
                                                                                itemId: "10", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                                    {
                                                                                        itemId: "11", itemLabel: "Item 04", isSelected: false, itemChilds: [
                                                                                            {
                                                                                                itemId: "12", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                                                    {
                                                                                                        itemId: "13", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                                                            {
                                                                                                                itemId: "14", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                                                                    {
                                                                                                                        itemId: "15", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                                                                            {
                                                                                                                                itemId: "16", itemLabel: "Item 05", isSelected: false, itemChilds: [
                                                                                                                                    {
                                                                                                                                        itemId: "17", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                                                                                            {
                                                                                                                                                itemId: "18", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                                                                                                    {
                                                                                                                                                        itemId: "19", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                                                                                                            { itemId: "20", itemLabel: "Item 01", isSelected: false, itemChilds: [], itemType: TreeItensTypes.folder, nodeExpanded: false }
                                                                                                                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                                                                                    }
                                                                                                                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                                                                            }
                                                                                                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                                                                    }
                                                                                                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                                                            },
                                                                                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                                                    }
                                                                                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                                            }
                                                                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                                    }
                                                                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                            }
                                                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                                    },
                                                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                            }
                                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                    }
                                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                            }
                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                    }
                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                            },
                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                    }
                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                            }
                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                    }
                ], itemType: TreeItensTypes.folder, nodeExpanded: false
            }
        ], itemType: TreeItensTypes.folder, nodeExpanded: false
    },
    { itemId: "21", itemLabel: "Item 03", isSelected: false, itemChilds: [], itemType: TreeItensTypes.file, nodeExpanded: false },
    { itemId: "22", itemLabel: "Item 04", isSelected: false, itemChilds: [], itemType: TreeItensTypes.file, nodeExpanded: false },
];


export default { title: "Tree manager" };
export const Arvore_Simples = () => <div>
    <TreeManager
        onContextMenu={(_, e) => e.preventDefault()}
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
</div>;
