import PropTypes from 'prop-types'
import {
    button,
    image
} from './SelectableChoice.module.css'

SelectableChoice.propTypes = {
    choice: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    setQuizStarted: PropTypes.func.isRequired
}

function SelectableChoice({choice, imgPath, setQuizSubject}) {
    return (
        <button 
            className={button}
            onClick={() => {
                setQuizSubject(choice)
            }}
        >
            <img className={image} src={imgPath} />
            {choice}
        </button>
    )
}

export default SelectableChoice