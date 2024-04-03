import { React, useEffect } from "react";
import CustomInput from "../components/CostumInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createPlace,
  getAPlace,
  resetState,
  updateAPlace,
} from "../features/place/placeSilce";

let schema = yup.object().shape({
  title: yup.string().required("Place Name is Required"),
});
const Addplace = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getPlaceId = location.pathname.split("/")[3];
  const newPlace = useSelector((state) => state.place);
  const {
    isSuccess,
    isError,
    isLoading,
    createdPlace,
    placeName,
    updatedPlace,
  } = newPlace;
  useEffect(() => {
    if (getPlaceId !== undefined) {
      dispatch(getAPlace(getPlaceId));
    } else {
      dispatch(resetState());
    }
  }, [getPlaceId]);

  useEffect(() => {
    if (isSuccess && createdPlace) {
      toast.success("Place Added Successfullly!");
    }
    if (isSuccess && updatedPlace) {
      toast.success("Pace Updated Successfullly!");
      navigate("/admin/list-place");
    }

    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: placeName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getPlaceId !== undefined) {
        const data = { id: getPlaceId, placeData: values };
        dispatch(updateAPlace(data));
        dispatch(resetState());
      } else {
        dispatch(createPlace(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getPlaceId !== undefined ? "Edit" : "Add"} Place
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
            label="Enter Place"
            id="Place"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getPlaceId !== undefined ? "Edit" : "Add"} Place
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addplace;