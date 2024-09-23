import PropTypes from 'prop-types'
import {
    button,
    image
} from './SelectableChoice.module.css'

SelectableChoice.propTypes = {
    choice: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired
}

function SelectableChoice({choice, imgPath}) {
    return (
        <button className={button}>
            <img className={image} src={imgPath} />
            {choice}
        </button>
    )
}

export default SelectableChoice