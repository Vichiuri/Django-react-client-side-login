import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";

export default function EditProductBrandModal(props) {
  const { show, handleModal, brand, updateProductBrand } = props;

  const [image, setImage] = useState("../static/images/add_image.png");
  const [compressedImage, setCompressedImage] = useState(null);
  const [fileInput, setFileInput] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    setImage(brand?.pic ? `..${brand.pic}` : "../static/images/add_image.png");
    setName(brand?.name);
    setDescription(brand?.description);
  }, [brand]);

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

  function editBanner() {
    if (name && description) {
      let formData = new FormData();
      formData.append("id", brand?.id);
      formData.append("name", name);
      formData.append("description", description);
      if (compressedImage) {
        formData.append("photo", compressedImage);
      }
      updateProductBrand(formData);
      handleModal();
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please enter brand name");
    } else if (!description) {
      setIsError(true);
      setResponseMessage("Please enter brand description");
    }
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />{" "}
        <center>
          <div className="add_category_img" onClick={() => fileInput.click()}>
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
        <div className="form-group">
          <label>Brand Name*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter unit name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="form-group">
          <label>Description*</label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            placeholder="Please enter description"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => editBanner()}
        >
          Edit Brand
        </button>
      </Modal.Footer>
    </Modal>
  );
}
