import styles from './index.module.css';
import Tile from '../tile';
import { CSSTransition }  from 'react-transition-group';

const Grid = ({ tiles, onTileClicked, numRows }) => {
    const rows = []
    let currentRow = []

    for (let i = 0; i < tiles.length; i++) {
        currentRow.push(
            <CSSTransition timeout={ 200 } key={ i }>
                <Tile 
                    key={ tiles[i] }
                    label={ tiles[i] } 
                    onclick={ onTileClicked }/>
            </CSSTransition>
        );
        if ((i + 1) % numRows === 0) {
            rows.push(<div key={ i }>{ [...currentRow] }</div>)
            currentRow = []
        }
    }
    
    return (
        <div className={ styles.Grid }>
            { rows }
        </div>
    )
}

export default Grid;