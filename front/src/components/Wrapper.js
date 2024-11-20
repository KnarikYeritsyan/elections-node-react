import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Wrapper(props) {
  const token = useSelector(store => store.people.token);
  if (!token) {
    return <Navigate to="/" replace />
  }
  return (
    <>
      {props.children}
    </>
  );
}

export default Wrapper;
