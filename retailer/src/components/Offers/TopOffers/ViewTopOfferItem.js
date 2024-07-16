import React from "react";
import { Link } from "react-router-dom";

export default function ViewTopOfferItem({ offer }) {
  return (
    <Link to={`/home/offer_details/${offer.id}`}>
      <div class="card active first-active-item offer_item_view">
        <div class="item-load item-row">
          <div class="category-item">
            {" "}
            <div class="vertical absolute-content-image">
              <div className="top_offer_link">
                <figure class="top_offers_img">
                  <img
                    alt="Top Featured Products"
                    class="vertical lazy-loaded transition"
                    src={
                      offer.pic ? `..${offer.pic}` : "../static/images/logo.svg"
                    }
                  />
                </figure>
                <div className="offer_message_view">{offer.name}</div>
              </div>

              <span class="top_offer_content">
                <span class="cate-name cate-count">
                  <span>{offer.name}</span>
                </span>
                <span class="count">{offer.detail_name}</span>{" "}
              </span>
            </div>
          </div>{" "}
        </div>
      </div>
    </Link>
  );
}
