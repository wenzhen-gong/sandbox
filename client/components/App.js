import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <div>
        <Link to="newgame">Start Game</Link>
      </div>
      <div>
        <Link to="leaderboard">Leader Board</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
