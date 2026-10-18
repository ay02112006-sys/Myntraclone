function Header(){
    return(
        <div className="heading">
            <img className="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbPV_1_GCJOfq6Y2VlSWJwEFmx35o3andd9kk99qq9A&s=10" alt="myntra_logo" height={30} width={30} />
            <div className="options">
                <button className="but">MEN</button>
                <button className="but">WOMEN</button>
                <button className="but">KIDS</button>
                <button className="but">HOME & LIVING</button>
                <button className="but">BEAUTY</button>
                <button className="but">Studio</button>

            </div>
            <input className="inp" type="text" placeholder="Search for products, brands and more" />
            <div className="profile">
            <button>Profile</button>
            <button>Wishlist</button>
            <button>Bag</button>
            </div>
        </div>
    )
}
export default Header;