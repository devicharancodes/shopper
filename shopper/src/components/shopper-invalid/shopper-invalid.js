import { Link } from "react-router-dom";



export function ShopperInvalid()
{
    return(
        <div>
            <h2 className="text-info mt-5 p-3 ">INVALID!! UserID or Password Please Try Again</h2>
            <Link to="/login" className="btn btn-secondary m-3 ">Try Again</Link>
        </div>
    )
}