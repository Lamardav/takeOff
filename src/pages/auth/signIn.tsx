import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FirstCompoenent } from "./firstCompoenent";
import { SecondComponent } from "./secondComponent";
import { RootState, useAppDispatch, useAppSelector } from "../../core/redux/store/store";
import { renew, reset } from "../../core/redux/slice/authSlice";
import { createSelector } from "@reduxjs/toolkit";

const state = (state: RootState) => state.auth;
const memoMass = createSelector(state, (state) => {
  console.log("Memoized Worked");
  return state.mass;
});
const memoIsAuth = createSelector(state, (state) => state.isAuth);

const SignIn = () => {
  console.log("Sign In Rendered");
  // const auth = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();
  const [number, setNumber] = useState(0);
  const memoizedMass = useAppSelector(memoMass);
  const memoizedIsAuth = useAppSelector(memoIsAuth);
  // const memoAgain = useMemo(() => memoizedMass, []);
  const normal = useAppSelector((state) => state.auth);
  console.log("auth", normal);
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const ClickHandler = () => {
    setNumber(number + 1);
    dispatch(renew());
    dispatch(reset());
  };
  return (
    <Content>
      page SignIn
      <FirstCompoenent mass={normal.mass} />
      <SecondComponent mass={memoizedMass} />
      <button onClick={ClickHandler}>click</button>
      {number}
    </Content>
  );
};

export default SignIn;

const Content = styled.div`
  color: black;
`;
