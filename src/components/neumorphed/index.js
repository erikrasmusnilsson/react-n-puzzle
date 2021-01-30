import styles from './index.module.css';

const Neumorphed = ({ children, className }) => {
    return (
        <div className={ [styles.Neumorphed, className].join(" ") }>
            { children }
        </div>
    )
}

export default Neumorphed;