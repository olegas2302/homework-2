import user from "../assets/images/user.png"
function Profile(){
    return(
        <div className="profileBlock">
            <div className="profileContent">
                <img src={user} className="user" alt="user"/>
                <div className="profileInfo">
                    <h3 className="profileName">Олег Чупин</h3>
                    <p className="profileText">Привет! Я начинающий программист</p>
                </div>
            </div>
        </div>
    )
}

export default Profile