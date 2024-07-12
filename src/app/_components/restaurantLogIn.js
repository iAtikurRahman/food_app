const RestaurantLogIn = ()=>{
    return (
        <>
        <h3>Login Here</h3>
        <div className="input-wrapper">
            email:<input type="email" placeholder="Inter your email" className="input-field" />
        </div>
        <div className="input-wrapper">
            pass:<input type="password" placeholder="Inter your pass" className="input-field" />
        </div>
        <div>
            <button className="button">Login</button>
        </div>
        </>
    )
}

export default RestaurantLogIn;