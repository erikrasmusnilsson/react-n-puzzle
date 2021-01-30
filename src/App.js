import styles from './App.module.css';
import Game from './components/game';
import { useState } from 'react';

const NUM_ROWS = 4;
const NUM_COLS = 4;

const App = () => {
    const [cols, setCols] = useState(NUM_COLS);
    const [rows, setRows] = useState(NUM_ROWS);

    const onRowsChanged = (rows) => {
        if (rows > 1) {
            setRows(rows);
        }
    }

    const onColsChanged = (cols) => {
        if (cols > 1) {
            setCols(cols);
        }
    }

    return (
        <div className={ styles.App }>
            <Game 
                rows={ rows } 
                cols={ cols }
                setRows={ onRowsChanged }
                setCols={ onColsChanged }/>
        </div>
  );
}

export default App;