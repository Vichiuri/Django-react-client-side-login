import React, { useState } from "react";
import NotificationRow from "./NotificationRow";

export default function ViewNotifications(props) {
  const {
    notifications,
    changePage,
    editNotification,
    deleteMobileNotification,
  } = props;

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <h3>Notifications</h3>
            <i
              onClick={() => changePage(2)}
              className="fas fa-plus btn_type"
            ></i>
          </div>

          <div className="card-content">
            {notifications.map((notification, index) => {
              return (
                <NotificationRow
                  key={index}
                  notification={notification}
                  editNotification={editNotification}
                  deleteMobileNotification={deleteMobileNotification}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
