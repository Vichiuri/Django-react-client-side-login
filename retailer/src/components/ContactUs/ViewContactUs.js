import React, { useState } from "react";

export default function ViewContactUs({
  distributor,
  setResponse,
  sendDistributorMessage,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (name && email && phone && message) {
      sendDistributorMessage({
        distributor: distributor?.id,
        name,
        email,
        phone,
        message,
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      setResponse({
        isError: true,
        responseMessage: { message: "Please enter all fields" },
      });
    }
  }

  return (
    <div className="contact_us_page">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">{distributor?.address}</div>
    
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">{distributor?.phone ?? ""}</div>
              <div className="text-two">{distributor?.phone2 ?? ""}</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">{distributor?.email ?? ""}</div>
              <div className="text-two">{distributor?.email2 ?? ""}</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>We would gladly love to hear some feedback from you</p>
            <div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Enter your text"
                  rows="4"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <br />
         
              <div className="button" onClick={() => sendMessage()}>
                <input type="button" value="Send Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
