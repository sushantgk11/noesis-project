import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Productlist() {
  const [list, setList] = useState([]);

  async function getList() {
    const data = await axios.get(`https://fakestoreapi.com/products/`);
    setList([data]);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {list.map((val) => {
              return val.data.map((val2) => {
                return (
                  <>
                    <div class="col my-3">
                      <div class="card shadow-sm">
                        <img
                          src={val2.image}
                          alt=""
                          width="100%"
                          height="300"
                          class="card-img-top"
                        />
                        <div
                          class="card-body d-flex flex-column align-items-end"
                          style={{ height: 200 }}
                        >
                          <h5 class="card-title">{val2.title}</h5>
                          <p class="text-muted">Price : $ {val2.price}</p>
                          <Link to={`/Productdetails/${val2.id}`}>
                            <button
                              type="button"
                              class="btn btn-sm btn-primary"
                            >
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              });
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;