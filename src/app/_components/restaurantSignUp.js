const RestaurantSignUp = ()=>{
    return (
        <>
        <h2> Sing up page </h2>
        <div className="input-wrapper">
            email:<input type="email" placeholder="Inter your email" className="input-field" />
        </div>
        <div className="input-wrapper">
            pass:<input type="password" placeholder="Inter your pass" className="input-field" />
        </div>
        <div className="input-wrapper">
            pass:<input type="password" placeholder="confirm your pass" className="input-field" />
        </div>
        <div>
            <button className="button">Login</button>
        </div>
        </>
    )
}

export default RestaurantSignUp;