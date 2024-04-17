import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getScore } from "../game/utils/catchSlice";

const LeaderBoard = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(getScore()).then((data) => {
      setList(data.payload);
    });
  }, []);

  return (
    <>
      <div>Leader Board</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {list.map((el) => {
            return (
              <tr>
                <td>{el.name}</td>
                <td>{el.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default LeaderBoard;
