import { Link } from "react-router-dom";

const Pet = ({
    petId,
    name,
    category,
    imageURL,
    description,
    likes

}) => {
    return (
        <li className="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img src={imageURL} /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <Link to="#"><button className="button"><i className="fas fa-heart"></i></button></Link>
                <Link to={`/pets/details/${petId}`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span> {likes}</span>
            </div>
        </li>
    );
}

export default Pet;