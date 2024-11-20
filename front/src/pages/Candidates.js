import React, { useEffect } from 'react';
import Wrapper from "../components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getCandidatesListRequest } from "../store/actions/candidates";

function Candidates(props) {
  const dispatch = useDispatch();
  const candidatesList = useSelector(store => store.candidates.candidatesList);
  console.log(candidatesList)
  useEffect(() => {
    dispatch(getCandidatesListRequest());
  }, [])
  return (
    <Wrapper>
      <h1>Candidates</h1>
      <ul>
        {candidatesList.map(c => (
          <li key={c.id}>
            {c.id}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default Candidates;
