import * as React from 'react';

import { TreeItensTypes } from './shared/models/TreeItensTypes';
import { itensMock } from './../../../mock/TreeManager';
import { TreeManager } from './TreeManager';


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
