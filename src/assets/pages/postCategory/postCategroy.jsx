import { useNavigate } from "react-router-dom";
import "../postCategory/postCategory.css"

export default function PostCategory() {
    const navigate = useNavigate()
    const storedUser = localStorage.getItem("user");
    const { user, token } = storedUser ? JSON.parse(storedUser) : { user: {}, token: "" };
  
    const postCategory = (e) => {
      e.preventDefault();
      const formdata = new FormData(e.target);    
      fetch(`https://avtoelon.onrender.com/category`, {
        method: "POST",
        body: formdata,
        headers: {
          token: token,
        },
      })
        .then((response) => response.json())
        .then(() => {
          navigate("/")
        })
        
    };
  
    return (
      <form className="form-categorys" onSubmit={postCategory}>
        <div className="category-list">
            <h2 className="heading">Category</h2>
          <input
            type="text"
            className="input-category"
            placeholder="Title"
            name="title"
          />
          <input
            type="file"
            className="input-category img-inp"
            placeholder="Image"
            name="image"
          />
          <button type="submit" className="input-category btn">
            Next
          </button>
        </div>
      </form>
    );
}