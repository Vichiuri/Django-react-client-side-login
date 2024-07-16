import React, { useState, useEffect } from "react";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import viewCurrencies from "../../utils/currencies";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomViewCurrenciesPopUp from "../../widgets/CustomViewCurrenciesPopUp";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import { fetchSelectSalesPeople } from "../../redux/Actions/Sales";

export default function AddSaleTargetGroup(props) {
  const { changePage, sales_people, addSalesTarget } = props;

  const [target_name, setTargetName] = useState("");
  const [salesMen, setSaleMen] = useState([]);
  const [viewSalesPeople, setViewSalesPeople] = useState([]);
  const [sales, setSales] = useState("");
  const [reward, setReward] = useState("");
  const [perc, setPerc] = useState("");
  const [period, setPeriod] = useState("");
  const [viewCurrency, setViewCurrency] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    setViewSalesPeople(sales_people);
    let commonCurrency = viewCurrencies.filter(
      (currency) => currency.cc === "KES"
    )[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
    } else {
      setViewCurrency(viewCurrencies[0]);
    }
  }, [sales_people]);

  const popUpValues = { anchorEl, popUpItems: viewCurrencies };

  function uploadSalesTarget() {
    setIsError(null);
    setResponseMessage("");
    if (target_name && salesMen.length > 0 && period && sales) {
      const sales_ids = salesMen.map((item) => {
        return item.value.id;
      });
      addSalesTarget({
        name: target_name,
        sale_people: JSON.stringify(sales_ids),
        period,
        target_sales: sales,
        reward_money: reward,
        reward_per: perc,
      });
    } else {
      setIsError(true);
      setResponseMessage("Please input all stared fields");
    }
  }

  function handleCurrencyPopUpClick(value) {
    let commonCurrency = viewCurrencies.filter(
      (currency) => currency.cc === value
    )[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
    }
    setAnchorEl(null);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Add Sales Target</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Groups"
                propsName="Add Group"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="card-content">
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />
            <div className="form-group">
              <label>Target Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Please enter target name"
                value={target_name}
                name="target_name"
                onChange={(e) => setTargetName(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group  mt-2">
                <label>Select SalesMan*</label>
                <CustomAsyncPagination
                  isMulti={true}
                  value={salesMen}
                  setValue={(value) => setSaleMen(value)}
                  fetchData={fetchSelectSalesPeople}
                  closeMenuOnSelect={false}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group  mt-2">
                <label>Select Target Period*</label>
                <select
                  className="form-control"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  required
                >
                  <option>...</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label className="control-label">Target Sales*</label>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                      className="input-group-prepend"
                    >
                      <span className="input-group-text btn_type">
                        {viewCurrencies && viewCurrency ? (
                          <div>{viewCurrency.cc}</div>
                        ) : (
                          <div>KSH .</div>
                        )}
                        <i className="ml-1 fas fa-chevron-down"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Please input target sales"
                      value={sales}
                      name="sales"
                      onChange={(e) => setSales(e.target.value)}
                      required
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label className="control-label">Monetary Reward</label>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                      className="input-group-prepend"
                    >
                      <span className="input-group-text btn_type">
                        {viewCurrencies && viewCurrency ? (
                          <div>{viewCurrency.cc}</div>
                        ) : (
                          <div>KSH .</div>
                        )}
                        <i className="ml-1 fas fa-chevron-down"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Please input target sales"
                      value={reward}
                      name="sales"
                      onChange={(e) => setReward(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label">Percentage Reward</label>
              <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">%</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="Please input target sales"
                    value={perc}
                    name="sales"
                    onChange={(e) => setPerc(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div
                onClick={() => uploadSalesTarget()}
                className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
              >
                Add SalesGroup
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomViewCurrenciesPopUp
        popUpValues={popUpValues}
        handlePopUpClick={handleCurrencyPopUpClick}
        handlePopUp={(e) =>
          anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
        }
      />
    </div>
  );
}
