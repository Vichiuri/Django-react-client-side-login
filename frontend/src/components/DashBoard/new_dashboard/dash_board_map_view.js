import React from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import KenyaJson from "../../../utils/kenya.json";

export default function DashBoardMapView(props) {
  return (
    <div className="col-xl-7">
      <div className="white_card card_height_100  mb_20">
        <div className="white_card_header">
          <div className="box_header m-0">
            <div className="main-title">
              <h3 className="m-0">Locations</h3>
            </div>
            <div className="header_more_tool">
              <div className="dropdown">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                >
                  <i className="ti-more-alt"></i>
                </span>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="ti-eye"></i> Action
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="ti-trash"></i> Delete
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="fas fa-edit"></i> Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="ti-printer"></i> Print
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="fa fa-download"></i> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="white_card_body">
          <div className="row justify-content-center">
            <VectorMap {...KenyaJson} className="dashboard_w_map pb_20" />
          </div>
          <div className="world_list_wraper">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single_progressbar">
                      <h6 className="f_s_14 f_w_400">Nairobi</h6>
                      <div id="bar4" className="barfiller">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="81"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single_progressbar">
                      <h6>Nakuru</h6>
                      <div id="bar5" className="barfiller">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="58"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single_progressbar">
                      <h6>Kisumu</h6>
                      <div id="bar6" className="barfiller">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="42"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single_progressbar">
                      <h6>Mombasa</h6>
                      <div id="bar7" className="barfiller">
                        <div className="tipWrap">
                          <span className="tip"></span>
                        </div>
                        <span className="fill" data-percentage="55"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
