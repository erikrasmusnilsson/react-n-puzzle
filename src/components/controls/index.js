import styles from './index.module.css';
import NumberInput from '../number-input';

const Controls = ({ 
    rows, 
    setRows, 
    cols, 
    setCols
}) => {
    return (
        <div className={ styles.Controls }>
            <NumberInput value={ rows } onchanged={ setRows } />
            <i className="fas fa-times"></i>
            <NumberInput value={ cols } onchanged={ setCols } />
        </div>
    )
}

export default Controls;