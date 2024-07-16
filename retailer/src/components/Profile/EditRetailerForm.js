import React, { useEffect, useState } from "react";
import ImageCompress from "../../../../frontend/src/utils/ImageCompress";

export default function EditRetailerForm(props) {
  const { retailer, setResponse, updateRetailUser, logOutRetailer } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kra, setKra] = useState("");
  const [phone, setPhone] = useState("");
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState();
  const [confirm_password, setConfirmPassword] = useState("");
  const [image, setImage] = useState("../static/images/add_image.png");
  const [compressedImage, setCompressedImage] = useState("");
  const [fileInput, setFileInput] = useState(0);

  useEffect(() => {
    setName(retailer?.name);
    setEmail(retailer?.email);
    setKra(retailer?.pin_no);
    setPhone(retailer?.phone);
    setImage(retailer?.pic ?? "../static/images/add_image.png");
  }, [retailer]);

  function fileSelectorHandler(e) {
    let fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    const viewImage = URL.createObjectURL(fileImage);
    setImage(viewImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    ImageCompress(fileImage)
      .then((compressImage) => {
        setCompressedImage(compressImage);
      })
      .catch((error) => console.log(error));
  }

  function updateProfile() {
    if (name && phone) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      if (compressedImage) {
        formData.append("photo", compressedImage);
      }
      if (new_password) {
        if (old_password && new_password == confirm_password) {
          formData.append("new_password", new_password);
          formData.append("confirm_password", confirm_password);
          formData.append("old_password", old_password);
          updateRetailUser(formData);
        } else if (!old_password) {
          setResponse({
            responseMessage: { message: "Please enter old password" },
            isError: true,
          });
        } else if (new_password != confirm_password) {
          setResponse({
            responseMessage: {
              message: "New Password and confirm do not match",
            },
            isError: true,
          });
        }
      } else {
        updateRetailUser(formData);
      }
    } else if (!name) {
      setResponse({
        responseMessage: { message: "Please enter company name" },
        isError: true,
      });
    } else if (!phone) {
      setResponse({
        responseMessage: { message: "Please enter company email" },
        isError: true,
      });
    }
  }

  return (
    <div>
      <div className="edit_retailer">
        <div className="row justify-content-between border border-bottom p-2">
          <h1 className="profile_title">Edit Profile</h1>
          <div
            onClick={() => logOutRetailer()}
            className="profile_table_button"
            style={{
              backgroundColor: "#F04124",
            }}
          >
            <i className="fas fa-power-off"></i> <div>Log Out</div>
          </div>
        </div>
        <center>
          <div className="profile_img" onClick={() => fileInput.click()}>
            <img src={image} alt="" />
            <input
              className="image_input"
              type="file"
              accept="image/*"
              onChange={(e) => fileSelectorHandler(e)}
              ref={(fileInput) => setFileInput(fileInput)}
            />
          </div>
        </center>
        <div className="grid">
          <div className="form-group a">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              required
            />
          </div>

          <div className="form-group b">
            <label for="kra">KRA PIN</label>
            <input
              id="kra"
              type="text"
              value={kra}
              onChange={() => setKra()}
              disabled
            />
          </div>

          <div className="form-group email-group">
            <label for="email">Phone</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label for="address">Email</label>
            <input
              id="address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </div>

          <div className="form-group">
            <label for="old_password">Old Password</label>
            <input
              id="old_password"
              type="password"
              placeholder="••••••"
              value={old_password}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="new_password">New Password</label>
            <input
              id="new_password"
              type="password"
              placeholder="••••••"
              value={new_password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="confirm_password">Confirm Password</label>
            <input
              id="confirm_password"
              type="password"
              placeholder="••••••"
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="button-container">
          <button className="button" onClick={() => updateProfile()}>
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}
