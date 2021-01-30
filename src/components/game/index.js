import { useState, useEffect } from 'react';
import styles from './index.module.css';
import Grid from '../grid';
import { OPEN_SLOT_ID } from '../../utils/constants';
import { scramble } from '../../utils/lists'
import Neumorphed from '../neumorphed';
import DiscreteButton from '../discrete-button';
import Controls from '../controls';

const Game = ({ 
    rows, 
    cols, 
    setCols, 
    setRows 
}) => {
    const [tiles, setTiles] = useState([]);
    const [prompt, setPrompt] = useState("");
    let directionLeft = -1;
    let directionRight = 1;
    let directionUp = -1 * cols;
    let directionDown = cols;

    useEffect(() => {
        if (checkWin()) {
            setPrompt("😍 You won! 😍")
        } else {
            setPrompt("😭 No win yet 😭");
        }
    }, [tiles]);

    useEffect(() => startGame(), [rows, cols]);

    const startGame = () => {
        const tiles = [];

        let counter = 1;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (i === rows - 1 && j === cols - 1) tiles.push(OPEN_SLOT_ID);
                else tiles.push(counter++);
            }
        }

        scramble(tiles);
        setTiles(tiles);
    }

    const onTileClicked = (id) => {
        if (isMovableTile(id)) {
            moveTile(id);
        }
    }

    const isMovableTile = (id) => {
        const tile = getTileCoordinates(id);
        const openSlot = getTileCoordinates(OPEN_SLOT_ID);
        const matchingRows = tile.row === openSlot.row;
        const matchingCols = tile.col === openSlot.col;
        return (matchingRows ^ matchingCols) === 1 ? true : false;
    }

    const moveTile = (id) => {
        const _tiles = [...tiles];
        const tile = getTileCoordinates(id);
        const direction = getDirectionToOpenSlot(id);
        
        let previousTileValue = _tiles[tile.idx];
        _tiles[tile.idx] = OPEN_SLOT_ID;

        let nextTileStepIndex = tile.idx + direction;
        while (_tiles[nextTileStepIndex] !== -1) {
            const tmp = _tiles[nextTileStepIndex];
            _tiles[nextTileStepIndex] = previousTileValue;
            previousTileValue = tmp;
            nextTileStepIndex += direction;
        }
        _tiles[nextTileStepIndex] = previousTileValue;

        setTiles(_tiles);
    }

    const getTileCoordinates = (id) => {
        const tileIndex = tiles.findIndex(tile => tile === id)
        const r = {
            row: Math.floor(tileIndex / cols),
            col: tileIndex % cols, 
            idx: tileIndex
        };
        return r;
    }

    const getDirectionToOpenSlot = (id) => {
        const tile = getTileCoordinates(id);
        const openSlot = getTileCoordinates(OPEN_SLOT_ID);
        if (tile.row === openSlot.row) {
            return tile.idx > openSlot.idx ? directionLeft : directionRight;
        } else {
            return tile.idx > openSlot.idx ? directionUp : directionDown;
        }
    }

    const checkWin = () => {
        if (tiles.length === 0) return false;
        let previousTile = 0;
        for (const tile of tiles) {
            if (tile !== previousTile + 1 && 
                previousTile !== OPEN_SLOT_ID && 
                tile !== OPEN_SLOT_ID
                ) {
                return false;
            }
            previousTile = tile;
        }
        return true;
    }

    return (
        <div className={ styles.Game }>
            <div className={ styles.Controls }>
                <h2>{ prompt }</h2>
                <Controls 
                    rows={ rows } 
                    setRows={ setRows }
                    cols={ cols }
                    setCols={ setCols }/>
                <Neumorphed className={ styles.RestartButton }>
                    <DiscreteButton onclick={ startGame }>
                    <i className="fas fa-redo"></i>
                    </DiscreteButton>
                </Neumorphed>
            </div>
            <Grid numRows={ cols } tiles={ tiles } onTileClicked={ onTileClicked } />  
        </div>
    );
}

export default Game;