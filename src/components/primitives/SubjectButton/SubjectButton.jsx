import PropTypes from 'prop-types'
import {
    button,
    image
} from './SubjectButton.module.css'

SubjectButton.propTypes = {
    subject: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired
}

function SubjectButton( {subject, imgPath} ) {
    return (
        <button className={button}>
            <img className={image} src={imgPath} />
            {subject}
        </button>
    )
}

export default SubjectButton