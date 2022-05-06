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
  const [post, setPost] = useState({ isLoading: true, users: [], error: null });
  const ClickHandler = () => {
    setNumber(number + 1);
    dispatch(renew());
    dispatch(reset());
  };
  const fetchS = () => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        return setPost({
          isLoading: false,
          users: result,
          error: null,
        });
      })
      .catch(console.log);
  };
  useEffect(() => {
    fetchS();
  }, []);
  console.log("posts", post);
  return (
    <Content>
      page SignIn
      <FirstCompoenent mass={normal.mass} />
      <SecondComponent mass={memoizedMass} />
      <button onClick={ClickHandler}>click</button>
      {number}
      {post.users.map((user) => {
        const { adderss, name, email } = user;
        return (
          <div key={name}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {adderss}</p>
            <hr />
          </div>
        );
      })}
    </Content>
  );
};

export default SignIn;

const Content = styled.div`
  color: black;
`;
