import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import star from "../assets/star.png";

function Productdetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  
  async function getDetails() {
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setDetails([data]);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {details.map((val) => {
        return (
          <>
            {" "}
            <div className="container d-flex justify-content-center mt-5">
              <div class="card mb-3" style={{ maxWidth: "80%" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={val.data.image}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h2 class="card-title text-primary">{val.data.title}</h2>
                      <p class="card-text">
                        <small class="text-muted">
                          Type : {val.data.category}
                        </small>
                      </p>
                      <h4>$ {val.data.price}</h4>
                      <span class="badge bg-success">
                        {val.data.rating.rate}{" "}
                        <img src={star} alt="star" width="12" height="12" />
                      </span>
                      <span> {val.data.rating.count} Ratings</span>
                      <br />
                      <br />
                      <h5>Description :</h5>
                      <p class="card-text">{val.data.description}</p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Productdetails;