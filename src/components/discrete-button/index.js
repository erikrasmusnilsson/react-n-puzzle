import styles from './index.module.css';

const DiscreteButton = ({ onclick, children, className }) => {
    return (
        <button className={ [styles.DiscreteButton, className].join(" ") } onClick={ onclick }>
            { children }
        </button>
    )
}

export default DiscreteButton;