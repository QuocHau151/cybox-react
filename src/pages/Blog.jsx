import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/pagetitle";
import img1 from "../assets/images/post/imgpost1.jpg";

import dataBlog from "../assets/fake-data/data-blog";
import Sidebar from "../components/sidebar";
import { classNames } from "classnames";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = Array.from(new Set(dataBlog.map((product) => product.category)));
  const PageNumber = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 2;
  const totalPages = Math.ceil(dataBlog.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = dataBlog.slice(startIndex, endIndex);
  const filteredProducts = selectedCategory
    ? dataBlog.filter((product) => product.category === selectedCategory)
    : currentItems;

  const handleSelectCategory = (item) => {
    setSelectedCategory(item);
  };

  return (
    <div>
      <PageTitle title="OUR BLOGs" />

      <section className="tf-section grid">
        <div className="container">
          <div className="row">
            <article className="article">
              {selectedCategory ? undefined : (
                <div className="post p-b42" data-aos="fade-up" data-aos-duration="1200">
                  <div className="image">
                    <img src={img1} alt="crybox" />
                    <div className="tag">nftartwork</div>
                  </div>
                  <ul className="meta-post">
                    <li>
                      <span>by</span>
                      <Link to="/blog-details">Admin</Link>
                    </li>
                    <li>
                      <Link to="/blog-details"> 20 Jun 2022</Link>
                    </li>
                  </ul>
                  <h5 className="title">
                    <Link to="/blog-details">
                      Convert more leads with these three new follow-up ideas
                    </Link>
                  </h5>
                  <p className="m-b17">
                    We make daily use products more affordable and accessible for a billion Indians
                    by using our in-house technology to power one of the world’s most efficient
                    grocery supply chains. We make daily use products more affordable and accessible
                    for a...
                  </p>
                  <Link to="/blog-details" className="read-more">
                    Read more
                  </Link>
                </div>
              )}
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="post inner-post"
                  data-aos="fade-up"
                  data-aos-duration="800">
                  <div className="image">
                    <img src={item.img} alt="crybox" />
                    <div className="tag">{item.category}</div>
                  </div>
                  <div className="content-post">
                    <ul className="meta-post">
                      <li>
                        <span>by</span>
                        <Link to="/blog-details">Admin</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">{item.time}</Link>
                      </li>
                    </ul>
                    <div className="title h7">
                      <Link to="/blog-details">{item.title}</Link>
                    </div>
                    <p>{item.text}</p>
                    <Link to="/blog-details" className="read-more">
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
              <div
                className="themesflat-pagination m-t40"
                data-aos="fade-in"
                data-aos-duration="800">
                <ul>
                  {PageNumber.map((item) => (
                    <li key={item.id}>
                      <Link
                        href=""
                        className={item === currentPage ? "active " : ""}
                        onClick={() => {
                          setCurrentPage(item);
                        }}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <Sidebar
              data={dataBlog}
              categories={categories}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
