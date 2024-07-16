import React, { useState } from "react";
import HtmlParser from "react-html-parser";

export default function ViewDetailsPage({ type, dist_options }) {
  let title =
    type == "about"
      ? "About Us"
      : type == "terms"
      ? "Terms and Conditions"
      : type == "privacy"
      ? "Privacy Policy"
      : "";
  let userData =
    type == "about"
      ? dist_options?.about
      : type == "terms"
      ? dist_options?.terms
      : type == "privacy"
      ? dist_options?.privacy
      : "";
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>{title}</h4>
      <div
        style={{
          width: "75%",
          display: "flex",
          textAlign: "justify",
        }}
      >
        {HtmlParser(userData)}
      </div>
    </div>
  );
}
