import React from "react";
const RetailerDashBoard = React.lazy(() =>
  import("../components/DashBoard/RetailerDashBoard")
);
const RetailerCart = React.lazy(() =>
  import("../components/Cart/RetailerCart")
);
const RetailerProductDetails = React.lazy(() =>
  import("../components/Products/ProductDetails/RetailProductDetails")
);
const RetailerOrders = React.lazy(() =>
  import("../components/Orders/RetailerOrders")
);
const SearchShop = React.lazy(() =>
  import("../components/Shop/SearchShop/SearchShop")
);
const RetailerShop = React.lazy(() =>
  import("../components/Shop/RetailerShop")
);
const EditRetailerProfile = React.lazy(() =>
  import("../components/Profile/EditRetailerProfile")
);
const FavouriteProducts = React.lazy(() =>
  import("../components/Products/FavProducts/FavouriteProducts")
);
const OfferDetails = React.lazy(() =>
  import("../components/Offers/OfferDetails/OfferDetails")
);
const ContactUs = React.lazy(() => import("../components/ContactUs/ContactUs"));
const OffersShop = React.lazy(() =>
  import("../components/Shop/OffersShop/OffersShop")
);
const DetailsPage = React.lazy(() =>
  import("../components/ViewDetails/DetailsPage")
);

const retailerRoutes = [
  {
    path: "/dashboard",
    name: "DashBoard",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: RetailerDashBoard,
    layout: "/home",
  },
  {
    path: "/cart",
    name: "Cart",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: RetailerCart,
    layout: "/home",
  },
  {
    path: "/details/:id",
    name: "View Details",
    icon: <i className="fas fa-users"></i>,
    component: RetailerProductDetails,
    layout: "/home",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: RetailerOrders,
    layout: "/home",
  },
  {
    path: "/shop/:id",
    name: "Shop",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: RetailerShop,
    layout: "/home",
  },
  {
    path: "/search_shop/:id/:query",
    name: "Search Shop",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: SearchShop,
    layout: "/home",
  },
  {
    path: "/account",
    name: "Account",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: EditRetailerProfile,
    layout: "/home",
  },
  {
    path: "/favourites",
    name: "Favourites",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: FavouriteProducts,
    layout: "/home",
  },
  {
    path: "/offer_details/:id",
    name: "Offers",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: OfferDetails,
    layout: "/home",
  },
  {
    path: "/contact_us",
    name: "Contact Us",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: ContactUs,
    layout: "/home",
  },
  {
    path: "/all_offers",
    name: "All Offers",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: OffersShop,
    layout: "/home",
  },
  {
    path: "/view_details/:type",
    name: "Details Page",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: DetailsPage,
    layout: "/home",
  },
];
export default retailerRoutes;
