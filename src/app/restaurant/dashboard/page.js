import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "@/app/restaurant/restaurantHeaderStyle.css"
import RestaurantFooter from "@/app/_components/RestaurantFooter";

const Dashboard = () => {
    return(
        <>
        <RestaurantHeader />
        <div>
            <h2>Wellcome to Dashboard</h2>
        </div>
        <RestaurantFooter />
        </>
    )
}

export default Dashboard;