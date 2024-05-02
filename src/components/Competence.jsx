function Competence(props){
    return(
        <div className="competenceBlock">
            <div className="competenceDesc">
                <h3>{props.competenceName}</h3>
                <p>{props.competenceText}</p>
            </div>
            <img className="competenceImage" src={props.competenceImage} alt={`Logo - ${props.name}`}/>
        </div>
    )
}

export default Competence