import styles from './index.module.css';

const NumberInput = ({ value, onchanged }) => {
    const middleware = (e) => {
        onchanged(parseInt(e.target.value));
    }

    return (
        <input 
            type="number" 
            value={ value } 
            onChange={ e => middleware(e)}
            className={ styles.NumberInput }/>
    );
}

export default NumberInput;