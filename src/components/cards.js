function Card(props){
    return(
        <div className="card">
            <img className="product-img" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQN5GLaGzrl8CAnHJRPF_T1iAxijjgjhiK8hB6yhTNAsY2mszOEBlqE7zjIPD0UxWTwlFG5DcwrvPbg0VQXzwrlaiqYD7Jw0-gn8_lXiRImuSbhAfR928ZpWWKf1CwkPjxyxFtYMEZJgQ&usqp=CAc" alt="tshirt" height={200} width={200}/>
            <div className="card-content">
            <h2>{props.Cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Price: {props.price}</h2>
            <h2>Shop Now</h2>
            </div>
        </div>
    )
}

export default Card;