import { useParams } from "react-router-dom";
import "../pages/more-info.css";
import { useEffect, useState } from "react";
import defaultImage from "../img/avatar.jpg";

function Info() {
  const { carsId } = useParams();  
  const [info, setInfo] = useState([]);
  const [commentCard, setCommentCard] = useState();
  const [commentContent, setCommentContent] = useState("");
  const storedUser = localStorage.getItem("user");
  const [update, setOnUpdate] = useState()
  const { user, token } = storedUser ? JSON.parse(storedUser) : { user: {}, token: "" };

  


  const onDelete = async (id) => {

    var deleteOptions = {
      method: "DELETE",
      headers: {
        token: token,
      },
    };

    await fetch(`https://avtoelon.onrender.com/car/${carsId}`, deleteOptions);
  };


  const onDeleteComment = async (id) => {

    var deleteOptions = {
      method: "DELETE",
      headers: {
        token: token,
      },
    };

    await fetch(`https://avtoelon.onrender.com/comment/${id}`, deleteOptions);
  };




  const commentVideos = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("token", token);


    var formdata = new FormData();
    formdata.append("authorId", user._id);
    formdata.append("carId", carsId);
    formdata.append("content", commentContent);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://avtoelon.onrender.com/comment", requestOptions)
      .then((response) => response.json())
      .then((result) => setCommentCard(result))
      .catch((error) => console.log("error", error));
    setCommentContent("");
  };

  const fetchCarInfo = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://avtoelon.onrender.com/car/${carsId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setInfo(result?.car))
      .catch((error) => console.log("error", error));
  };

  const onUpdateCar = async (id) => {
    var myHeaders = new Headers();
myHeaders.append("token", token);

var formdata = new FormData();
formdata.append("title", info[0]?.title);
formdata.append("image", fileInput.files[0], "");

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};
fetch(`https://avtoelon-production.up.railway.app/car/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => setOnUpdate(result))
  .catch(error => console.log('error', error));
  }


  useEffect(() => {
    fetchCarInfo();
  }, [commentCard]);



  return (
    <>
      <div className="more-info-page">
        <div className="page-info-all">
          <div className="one-card">
            <div className="user-car-img-box">
              <img
                width={450}
                height={280}
                src={info[0]?.image?.url || defaultImage}
                alt="Car"
                className="user-car-img"
              />
            </div>
            <div className="right-infos">
              <div className="user-car-texts">
                <h1 className="user-car-title">{info[0]?.title}</h1>
                <div className="infos">
                  <p className="info-text">{info[0]?.year}</p>
                  <p className="info-text">{info[0]?.price}$</p>
                  <p className="info-text">{info[0]?.location}</p>
                </div>
                <div className="car-class">{info[0]?.description}</div>
              </div>
              <div className="user-account">
                <img
                  src={info[0]?.author?.avatar?.url || defaultImage}
                  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                />
                <div
                  className="user-account-title"
                  style={{
                    display: "flex",
                    gap: "5px",
                    textTransform: "capitalize",
                  }} 
                >
                  <div className="title-user-acc">
                    <h4 className="firstname">{info[0]?.author?.firstname}</h4>
                    <h4 className="lastname">{info[0]?.author?.lastname}</h4>
                  </div>
                  <div className="user-gmail">{info[0]?.author?.email}</div>
                </div>
                {info[0]?.author._id === user._id && (
                  <>
        <button className="btn-delete" onClick={onDelete}>
          Delete
        </button>
          <button className="btn-delete1" onClick={() => onUpdateCar(content._id)}>
          Edit
        </button>
                  </>
      )}
              </div>
            </div>
          </div>
        </div>
        <div className="comments-all">
          <h3 className="heading" style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"10px"}}>Comments</h3>
        {info[0]?.comments?.length > 0 ? (
          info[0]?.comments?.map((content, idx) => (
            <div className="comment-info-user">
              <div className="coment" key={idx}>
                <img
                  src={defaultImage}
                  style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                  alt=""
                  className="user-comment-img"
                  />
                <div className="comment-info">
                  <p className="comment-user-name" style={{ color: "blue" }}>
                    Auto elon user
                  </p>
                  <p className="comment-user-title">{content.content}</p>
  <button className="btn-delete-comment" onClick={() => onDeleteComment(content._id)}>
    Delete
  </button>



                </div>
              </div>
            </div>
          ))
        ) : (
          <p
          style={{
            fontSize: "27px",
            color: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
          >
            Hozircha comment mavjud emas !
          </p>
        )}

        </div>
        <form className="form-comment" method="post" onSubmit={commentVideos}>
          <input
            type="text"
            name="content"
            placeholder="Komment qo'shish"
            className="post-comment-inp"
            required
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <button className="post-comment-btn" type="submit">
            Post comment

          </button>
          
        </form>
      </div>
    </>
  );
}

export default Info;
