import "../pages/not-page.css"
import Img from "../img/404.jpg"
import { Link } from "react-router-dom";

function NotPage() {
    return (
        <>
        <div className="not-found">
        <img width={700} height={600} src={Img} alt="" />
        <div className="">

        <h1 className="h1">404</h1>
        <h2 className="h2">Sahifa topilmadi</h2>
        <Link to={"/"}> <button className="btn-found">Home</button> </Link>
        </div>
        </div>
        </>
    )
}

export default NotPage;