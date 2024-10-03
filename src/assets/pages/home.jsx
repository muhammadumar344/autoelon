import { useEffect } from "react";
import Navbar from "../companents/Navbar/navbar";
import "../pages/home.css";
import { useCardContext } from "../context/cars";
import { useCategoryContext } from "../context/category";
import { Link } from "react-router-dom";
import Footer from "../companents/footer/footer";
import Slide from "../companents/slider/slider";

export default function Home() {
  const { card, loading: cardLoading, error: cardError } = useCardContext();
  const { category, loading: categoryLoading, error: categoryError } = useCategoryContext();

  useEffect(() => {
    if (cardError || categoryError) {
      alert("Bizning web sahifamiz ishlamayapti");
    }
  }, [cardError, categoryError]);

  return (
    <>
      <Slide />
      <div className="categorys">
        {category?.map((categorys, id) => (
          <Link to={`/category/${categorys._id}`} className="item" key={id}>
            <img src={categorys.image.url} alt="" className="car-logo" />
            <p className="car-name">{categorys.title}</p>
          </Link>
        ))}
      </div>
      <div className="cards">
        {card?.map((car, idx) => (
          <div className="card" key={idx}>
            <img className="car-img" src={car.image.url} alt="" />
            <div className="info-car-list">
              <div className="info-car-item">
                <h3 className="cars-name">{car.title}</h3>
                <p className="narx">Narxi: {car.price}$</p>
                <p className="yili">Yili: {car.year}</p>
                <p className="holat">Holati: {car.description}</p>
              </div>
              <Link to={`/car/${car._id}`} className="btn-more">
                <button className="save">more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
