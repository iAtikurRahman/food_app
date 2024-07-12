'use client'
import { useState } from "react";
import RestaurantLogIn from "../_components/restaurantLogIn";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
    const [login, setLogIn] = useState(true);
    
    return (
        <>
        <div className="container">
        {
                login ? <RestaurantLogIn /> : <RestaurantSignUp />
            }
            <div>
                <button onClick={() => setLogIn(!login)} className="botton-link">
                    {login ? "Do not have an account? Sign up" : "Already have an account? Log in"}
                </button>
            </div>
        </div>            
        </>
    );
}

export default Restaurant;
