import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

import ProjectItem from "../project-item";
import "../../../scss/components/form.scss";
import Button from "../../../components/button";

function Project({ data }) {
  const [visible, setVisible] = useState(16);
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Category");

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  useEffect(() => {
    setProducts(data);
  }, []);
  useEffect(() => {
    setCategory(category);
  }, []);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value.trim());
  };
  const filteredProducts = () => {
    const searchFilter = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return searchFilter;
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <section className="tf-section tf-project home-2 nft-item">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="widget widget-search" data-aos="fade-in" data-aos-duration="800">
              <form action="#">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchInput}
                  placeholder="Search"
                  required=""
                />
                <button>
                  <i className="fal fa-search"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-8 z-index">
            <div className="seclect-box" data-aos="fade-in" data-aos-duration="800"></div>
          </div>
          {searchValue
            ? filteredProducts()
                .slice(0, visible)
                .map((item) => (
                  <div key={item.id} value={item.id} className="col-md-3">
                    <ProjectItem item={item} />
                  </div>
                ))
            : data.slice(0, visible).map((item) => (
                <div key={item.id} className="col-md-3">
                  {item.categories}
                  <ProjectItem item={item} />
                </div>
              ))}

          {visible < data.length && (
            <div className="col-md-12">
              <div
                className="btn-about center m-t16"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800">
                <Button title="Load More" path="#" onClick={showMoreItems} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Project;
