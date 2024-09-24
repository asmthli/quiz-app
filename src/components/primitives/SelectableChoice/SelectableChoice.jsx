import PropTypes from 'prop-types'
import {
    button,
    image
} from './SelectableChoice.module.css'

SelectableChoice.propTypes = {
    choice: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    setQuizSubject: PropTypes.func.isRequired
}

function SelectableChoice({choice, imgPath, setQuizSubject, iconBgColor}) {
    const imgStyle = {
        '--iconBgColor': iconBgColor
    }

    return (
        <button 
            className={button}
            onClick={() => {
                setQuizSubject(choice)
            }}
        >
            <img className={image} src={imgPath} style={imgStyle} />
            {choice}
        </button>
    )
}

export default SelectableChoice