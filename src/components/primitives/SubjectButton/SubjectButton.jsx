function SubjectButton( {subject, imgPath} ) {
    return (
        <button>
            <img src={imgPath}></img>
            {subject}
        </button>
    )
}

export default SubjectButton