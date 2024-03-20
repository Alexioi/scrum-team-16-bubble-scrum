"use client";

import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState, actions } from "@/store";
import "./style.module.scss";

const HelloToxin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const helloToxin = useSelector((state: RootState) => state.helloToxin);

  const onClickButton = () => {
    dispatch(actions.helloToxin.change("Hello, Toxin!"));
  };

  return (
    <div>
      <button onClick={onClickButton}>Hello</button>
      <span className={style.test}>{helloToxin.data}</span>
    </div>
  );
};

export { HelloToxin };
