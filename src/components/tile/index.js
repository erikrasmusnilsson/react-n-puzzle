import styles from './index.module.css';
import Neumorphed from '../neumorphed';
import { OPEN_SLOT_ID } from '../../utils/constants';

const Tile = ({ label, onclick }) => {
    const playerTile = (
        <Neumorphed className={ styles.Tile }>
            <div onClick={ () => onclick(label) }>
                <p>{ label !== OPEN_SLOT_ID ? label : null }</p>
            </div>
        </Neumorphed>
    );

    const emptyTile = (
        <div className={ styles.Tile }></div>
    );

    return label === OPEN_SLOT_ID ? emptyTile : playerTile;
}

export default Tile;