function NecessaryCompetence(props){
    return(
        <div className="compBlock">
        <div className="compDesc">
            <div className="flexCompDesc">
                <h3 className="compName">{props.Name}</h3>
                <p className="compDescText">{props.Description}</p>
            </div>
        </div>
    </div>
    ) 
}

export default NecessaryCompetence