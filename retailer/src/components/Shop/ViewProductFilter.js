import React, { useEffect, useState } from "react";
import RetailerCheckBox from "../../widgets/RetailerCheckBox";
import Slider from "@material-ui/core/Slider";
import Debouncer from "../../../../frontend/src/utils/Debouncer";

export default function ViewProductFilter(props) {
  const {
    categories,
    distributor,
    fetchViewProducts,
    fetchRetailerSubCategories,
    sub_categories,
    viewCurrentCategory,
  } = props;

  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);
  const [viewCategories, setViewCategories] = useState([]);
  const [viewSubCategories, setViewSubCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    if (categories && currentCategory == null && viewCurrentCategory) {
      setViewCategories(
        categories.map((item) => {
          if (viewCurrentCategory == item.id) {
            return { id: item.id, name: item.name, selected: true };
          } else {
            return { id: item.id, name: item.name, selected: false };
          }
        })
      );
    }

    if (sub_categories) {
      setViewSubCategories(
        sub_categories.map((item) => {
          if (currentSubCategory && currentSubCategory.id == item.id) {
            return { id: item.id, name: item.name, selected: true };
          } else {
            return { id: item.id, name: item.name, selected: false };
          }
        })
      );
    }
  }, [categories, sub_categories]);

  function valuetext(value) {
    return `Ksh. ${value}`;
  }

  function changeCategory(category) {
    setCurrentCategory(category);

    setViewCategories(
      categories.map((item) => {
        if (category && category.id == item.id) {
          return { id: item.id, name: item.name, selected: true };
        } else {
          return { id: item.id, name: item.name, selected: false };
        }
      })
    );
    if (distributor) {
      fetchViewProducts(distributor.id, 1, category.id, priceRange);
      fetchRetailerSubCategories(category.id);
    }
  }

  function changeSubCategory(s_category) {
    setCurrentSubCategory(s_category);
    const isSub = true;
    setViewSubCategories(
      sub_categories.map((item) => {
        if (s_category && s_category.id == item.id) {
          return { id: item.id, name: item.name, selected: true };
        } else {
          return { id: item.id, name: item.name, selected: false };
        }
      })
    );
    if (distributor) {
      fetchViewProducts(distributor.id, 1, s_category.id, priceRange);
      fetchRetailerSubCategories(s_category.id, 1, isSub);
    }
  }

  return (
    <div
      class="block filter"
      id="layered-filter-block"
      style={{
        marginTop: "50px",
      }}
    >
      <div class="block-title filter-title" data-count="0">
        <strong data-role="title">Shop By</strong>
      </div>
      <div class="block-content filter-content">
        <strong
          role="heading"
          aria-level="2"
          class="block-subtitle filter-subtitle"
        >
          Shopping Options
        </strong>
        <div class="filter-options" id="narrow-by-list">
          <div class="filter-options-item">
            <div data-role="title" class="filter-options-title">
              Category
            </div>
            <div className="product_filter_items">
              {viewCategories.map((category, index) => {
                return (
                  <RetailerCheckBox
                    item={category}
                    key={index}
                    handleChange={() => changeCategory(category)}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
          {sub_categories && sub_categories.length > 0 ? (
            <div data-role="collapsible" class="filter-options-item">
              <div data-role="title" class="filter-options-title">
                Sub-Category
              </div>
              <div className="product_filter_items">
                {viewSubCategories.map((s_category, index) => {
                  return (
                    <RetailerCheckBox
                      item={s_category}
                      key={index}
                      handleChange={() => changeSubCategory(s_category)}
                      index={`${index}_2`}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div />
          )}
          <div data-role="collapsible" class="filter-options-item">
            <div data-role="title" class="filter-options-title">
              Price
            </div>
            <div className="product_filter_items">
              <Slider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={10}
                valueLabelDisplay="auto"
                min={0}
                max={100000}
                step={10000}
                marks={[
                  {
                    value: 0,
                    label: "Ksh. 0",
                  },
                  {
                    value: 100000,
                    label: "Ksh. 100000",
                  },
                ]}
                onChange={Debouncer((event, newValue) => {
                  setPriceRange(newValue);
                  fetchViewProducts(
                    distributor.id,
                    1,
                    currentSubCategory
                      ? currentSubCategory.id
                      : currentCategory?.id,
                    newValue
                  );
                }, 2000)}
              />
            </div>
          </div>
          <div data-role="collapsible" class="filter-options-item">
            <div data-role="title" class="filter-options-title">
              Product Brand
            </div>
            <div data-role="content" class="filter-options-content">
              <ol class="items">
                <li class="item">
                  <a href="shop2206.html?product_brand=2" rel="nofollow">
                    Iqvia
                    <span class="count">
                      6<span class="filter-count-label">item</span>
                    </span>
                  </a>
                </li>
                <li class="item">
                  <a href="shopa540.html?product_brand=3" rel="nofollow">
                    Impact
                    <span class="count">
                      5<span class="filter-count-label">item</span>
                    </span>
                  </a>
                </li>
                <li class="item">
                  <a href="shopf9fd.html?product_brand=4" rel="nofollow">
                    Creative
                    <span class="count">
                      4<span class="filter-count-label">item</span>
                    </span>
                  </a>
                </li>
                <li class="item">
                  <a href="shop4fe2.html?product_brand=5" rel="nofollow">
                    CarRentals
                    <span class="count">
                      1<span class="filter-count-label">item</span>
                    </span>
                  </a>
                </li>
                <li class="item">
                  <a href="shopf83d.html?product_brand=6" rel="nofollow">
                    Carvoodoo
                    <span class="count">
                      2<span class="filter-count-label">item</span>
                    </span>
                  </a>
                </li>
                <li class="item">
                  <a href="shopd4f6.html?product_brand=7" rel="nofollow">
                    Carmentor
                    <span class="count">
                      2<span class="filter-count-label">item</span>
                    </span>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
