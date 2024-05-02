import NecessareCompetenceData from '../data/NecessareCompetenceData'
import CompetenceData from '../data/CompetenceData'
import Competence from './Competence'
import NecessaryCompetence from './NecessaryCompetence'

function Portfolio(){
    return(
        <div className='Base'>
            <div className='portfolio'>
            {CompetenceData.map((skills) => (
                <Competence
                    competenceName = {skills.name}
                    competenceText = {skills.description}
                    competenceImage = {skills.image}
                    key = {skills.id}
            />
            ))}
        </div>
        <div className='component'>       
            {NecessareCompetenceData.map((competenc) => (
                    <NecessaryCompetence
                        Name = {competenc.name}
                        Description = {competenc.description}
                    />
                ))}
        </div>
        </div>
    )
}
export default Portfolio