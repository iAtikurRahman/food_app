'use client'
import { useState } from "react";
import RestaurantLogIn from "../_components/restaurantLogIn";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
    const [login, setLogIn] = useState(true);
    
    return (
        <>
            <h2>Restaurant LogIn/SignUp Page</h2>
            {
                login ? <RestaurantLogIn /> : <RestaurantSignUp />
            }
            <div>
                <button onClick={() => setLogIn(!login)}>
                    {login ? "Do not have an account? Sign up" : "Already have an account? Log in"}
                </button>
            </div>
        </>
    );
}

export default Restaurant;
