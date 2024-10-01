import { useEffect } from "react";
import "../post-page/post-car.css";
import { useCategoryContext } from "../../context/category";
import { useNavigate } from "react-router-dom";

export default function PostCarPage() {
  const { category } = useCategoryContext();
  const navigate = useNavigate()

const user = JSON.parse(localStorage.getItem("user"))
  const postCar = (e) => {
    
    e.preventDefault();
    const formdata = new FormData(e.target);    
    formdata.append("author", user.user._id);
  formdata.append("isActive", true);

    fetch("https://avtoelon.onrender.com/car", {
      method: "POST",
      body: formdata,
      headers: {
        token: user.token
,
      },
    })
      .then((response) => response.json())
      .then(() => {
        window.location.reload();  
        navigate("/")
      })
      
  };

  return (
    <form className="form" onSubmit={postCar}>
      <div className="sale-list">
        <input
          type="text"
          className="title-name sale-input"
          placeholder="Title"
          name="title"
        />
        <input
          type="text"
          className="year sale-input"
          placeholder="Year"
          name="year"
        />
        <input
          type="text"
          className="price sale-input"
          placeholder="Price"
          name="price"
        />
        <input
          type="text"
          className="class sale-input"
          placeholder="Class"
          name="class"
        />
        <input
          type="text"
          className="location sale-input"
          placeholder="Location"
          name="location"
        />
        <input
          type="text"
          className="description sale-input"
          placeholder="Description"
          name="description"
        />
        <input
          type="file"
          className="img sale-input"
          placeholder="Image"
          name="image"
        />
        <select className="sale-input" name="category" required>
          <option value="">Kategoriya tanlang</option>
          {category.map((category, idx) => (
            <option name="category" key={idx} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
        <button type="submit" className="sale">
          Next
        </button>
      </div>
    </form>
  );
}
