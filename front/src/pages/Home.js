import React, { useCallback, useState } from 'react';
import WrapperLogOut from "../components/WrapperLogOut";
import { useDispatch } from "react-redux";
import { peopleSignInRequest } from "../store/actions/people";

function Home(props) {
  const [passport, setPassport] = useState('');
  const dispatch = useDispatch();

  const handlePassportChange = useCallback((ev) => {
    setPassport(ev.target.value);
  }, []);

  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    dispatch(peopleSignInRequest(passport));
  }, [passport]);
  return (
    <WrapperLogOut>
      <h1>Home</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={passport} onChange={handlePassportChange} placeholder="passport" />
        <br />
        <button>Sing In</button>
      </form>
    </WrapperLogOut>
  );
}

export default Home;
