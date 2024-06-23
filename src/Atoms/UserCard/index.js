import './index.css'
const UserCard=({image,fullName,age,email,gender})=>{
    return(
        <div className="Cards">
            <img src={image} alt={`${fullName} profile`} className="image"/>
            <h3 className="fullName">{fullName} </h3>
            <p>{age}</p>
            <p>{email}</p>
            <p>{gender}</p>
        </div>
    )
}
export default UserCard;