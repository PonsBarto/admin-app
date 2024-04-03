import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAplace,
  getPlaces,
  resetState,
} from "../features/place/placeSlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Placelist = () => {
  const [open, setOpen] = useState(false);
  const [placeId, setplaceId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setplaceId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getplaces());
  }, []);
  const placeState = useSelector((state) => state.place.places);
  const data1 = [];
  for (let i = 0; i < placeState.length; i++) {
    data1.push({
      key: i + 1,
      name: placeState[i].title,
      action: (
        <>
          <Link
            to={`/admin/place/${placeState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(placeState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deletePlace = (e) => {
    dispatch(deleteAplace(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getPlaces());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Places</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deletePlace(placeId);
        }}
        title="Are you sure you want to delete this place?"
      />
    </div>
  );
};

export default Placelist;