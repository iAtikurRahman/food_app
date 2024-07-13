'use client'
import { useState } from "react";
import RestaurantLogIn from "../_components/RestaurantLogIn";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";
import "../restaurant/restaurantHeaderStyle.css"

const Restaurant = () => {
    const [login, setLogIn] = useState(true);
    
    return (
        <>
        <div className="container">
            <RestaurantHeader />
        {
                login ? <RestaurantLogIn /> : <RestaurantSignUp />
            }
            <div>
                <button onClick={() => setLogIn(!login)} className="botton-link">
                    {login ? "Do not have an account? Sign up" : "Already have an account? Log in"}
                </button>
            </div>
        </div>
        <RestaurantFooter />            
        </>
    );
}

export default Restaurant;
