import errorIcon from '/images/icon-error.svg'
import styles from './ErrorMessage.module.css'

function ErrorMessage({classToAdd}) {
    return (
        <div className={styles.error + " " + classToAdd}>
            <img className={styles.image} src={errorIcon} aria-hidden />
            <p className={styles.error} aria-live='polite'>Please select an answer</p>
        </div>
    )
}

export default ErrorMessage