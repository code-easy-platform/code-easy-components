import * as React from 'react';

// import { ItemFluxo } from '../../models/ItemFluxo';
// import { ItemToDrag } from '../item-drag/ItemDrag';
import style from './Toolbar.css';

export const Toolbar = (/* props: any */) => {
    // const itensLogica = props.itensLogica;

    return (
        <div className={style.miniScrollBar + " " + style.toolbar}>
            {/* {itensLogica.map((item: ItemFluxo) => {
                return <ItemToDrag
                    isSelecionado={item.isSelecionado}
                    itemType={item.itemType}
                    title={item.nome}
                    allowDrag={true}
                    key={item.id}
                    id={item.id}
                    style={{}}
                />;
            })} */}
        </div>
    );
}
