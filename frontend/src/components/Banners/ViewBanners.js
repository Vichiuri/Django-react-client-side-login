import React, { useState, useEffect } from "react";
import EditBannerModal from "./EditBannerModal";
import ViewBannerRow from "./ViewBannerRow";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddBannerModal from "./AddBannerModal";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function ViewBanners(props) {
  const {
    banners,
    deleteBanner,
    updateBanner,
    products,
    offers,
    fetchProducts,
    fetchPriceOffers,
    addBanner,
    updateBannerPosition,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewBanner, setViewBanner] = useState(null);
  const [viewBanners, setViewBanners] = useState([]);

  useEffect(() => {
    setViewBanners(banners);
  }, [banners]);

  function editBanner(banner) {
    setViewBanner(banner);
    setShowModal(true);
  }

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    updateBannerPosition({
      initial: viewBanners[result.source.index].position,
      final: viewBanners[result.destination.index].position,
    });
    const items = reorder(
      viewBanners,
      result.source.index,
      result.destination.index
    );

    setViewBanners(items);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div class="card-header">
            <h2>View Banners</h2>
            <i
              onClick={() => setShowAddModal(true)}
              className="fas fa-plus"
            ></i>
          </div>

          <div className="card-content">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="Droppable">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {viewBanners.map((banner, index) => {
                      return (
                        <Draggable
                          key={index}
                          draggableId={`${index}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <ViewBannerRow
                                banner={banner}
                                deleteBanner={deleteBanner}
                                editBanner={editBanner}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    })}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
        <AddBannerModal
          show={showAddModal}
          handleModal={() => setShowAddModal(!showAddModal)}
          addBanner={addBanner}
          products={products}
          offers={offers}
          fetchProducts={fetchProducts}
          fetchPriceOffers={fetchPriceOffers}
        />
        <EditBannerModal
          show={showModal}
          handleModal={() => setShowModal(!showModal)}
          updateBanner={updateBanner}
          banner={viewBanner}
          products={products}
          offers={offers}
          fetchProducts={fetchProducts}
          fetchPriceOffers={fetchPriceOffers}
        />
      </div>
    </div>
  );
}
