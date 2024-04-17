import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export const DisplayScore = () => {
  const score = useSelector((state) => state.myReducers.score);
  return (
    <div>Score: {score}</div>
  )
}
