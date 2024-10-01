import { useEffect, useState } from "react";
import "../pages/category-info.css"
import { Link, useParams } from "react-router-dom";
import { useCategoryContext } from "../context/category";


function CategoryInfo() {
    const { categoryId } = useParams();
    const [ oneCategory, setOneCategory] = useState()
    const { category } = useCategoryContext();

    const storedUser = localStorage.getItem("user");
    const { user, token } = storedUser ? JSON.parse(storedUser) : { user: {}, token: "" };
    
  

    const onDelete = async (id) => {

      
      var deleteOptions = {
        method: "DELETE",
        headers: {
          token: token,
        },
      };
  
      await fetch(`https://avtoelon.onrender.com/category/${id}`, deleteOptions);
    };

    const categoryInfo = () => {


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
      fetch(`https://avtoelon.onrender.com/category/${categoryId}`, requestOptions)
      .then(response => response.json())
      .then(result => setOneCategory(result))
      .catch(error => console.log('error', error));
    }

    useEffect(() => {
   categoryInfo()
    }, [])

    
    console.log(oneCategory?.category[0]?._id);
    
    return (
        <>
        <div className="category-headers">
          <img width={120} height={120} style={{marginBottom:"10px", borderRadius:"50%"}} src={oneCategory?.category[0]?.image.url} alt="" />
          <h1 className="heading-category" >{oneCategory?.category[0]?.title}</h1>  
          <button className="btn-delete-category" onClick={() => onDelete(oneCategory?.category[0]?._id)}>
          Delete
        </button>
      </div>
        <div className="cards">
            {oneCategory?.category[0]?.cars.map((categoryCar, idx) => (

                <div className="card" key={idx}>
            <img  className="car-img" src={categoryCar.image.url} alt="" />
            <div className="info-car-list">
              <div className="info-car-item">
                <h3 className="cars-name">{categoryCar.title}</h3>
                <p className="narx">Narxi: {categoryCar.price}$</p>
                <p className="yili">Yili: {categoryCar.year}</p>
                <p className="holat">Holati: {categoryCar.description}</p>
              </div>
              <Link to={`/car/${categoryCar._id}`} className="btn-more">
                <button className="save">more </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
        </>
    )
}

export default CategoryInfo;