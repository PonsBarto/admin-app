import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerService";
import productReducer from "../features/product/productSlice";
import placeReducer from "../features/place/placeService";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import colorReducer from "../features/color/colorSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    place: placeReducer,
    pCategory: pCategoryReducer,
    color: colorReducer,
    enquiry: enquiryReducer,
    upload: uploadReducer,
  },
});