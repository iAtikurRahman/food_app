import Link from "next/link"

const RestaurantHeader = () => {
    return (
        <>
        <div className="header-wrepper">
            <div className="header-logo">
                <img style={{width:50}} src="/assets/sohana_saba.jpg" alt="Sohana_Saba.jpg" />
            </div>
            <ul>
                <li>
                    <Link href="">Home</Link>
                </li>
                <li>
                    <Link href="">Contact</Link>
                </li>
                <li>
                    <Link href="">Products</Link>
                </li>
                <li>
                    <Link href="">About us</Link>
                </li>
            </ul>
        </div>
        </>   
    )
}

export default RestaurantHeader;