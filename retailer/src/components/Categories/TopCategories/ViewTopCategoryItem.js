import React from "react";
import { Link } from "react-router-dom";

export default function ViewTopCategoryItem({ category }) {
  return (
    <div className="card active first-active-item top_category_view">
      <div className="item-load item-row">
        <div className="category-item">
          {" "}
          <Link
            to={`/home/shop/${category.id}`}
            className="vertical absolute-content-image"
          >
            <div className="top_category_link">
              <figure className="top_category_img">
                <img
                  alt="Top Featured Products"
                  className="vertical lazy-loaded transition"
                  src={
                    category.category_pic
                      ? `..${category.category_pic}`
                      : "../static/images/logo.svg"
                  }
                />
              </figure>
              <div className="category_message_view">
                {category.name}
                {`  (${category.productcount} items)`}
              </div>
            </div>
            {/* <span className=" top_category_item">
              <span className="cate-name cate-count">
                <span>{category.name}</span>
                <span className="count">{`(${category.productcount} items)`}</span>{" "}
              </span>
            </span> */}
          </Link>
        </div>{" "}
      </div>
    </div>
  );
}
