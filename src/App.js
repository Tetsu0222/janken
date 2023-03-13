import { NavLink, Outlet } from "react-router-dom";
import './App.css';

function isCurrent({ isActive }) {
  return isActive ? 'current' : undefined;
}

//[/数字]はルートパラメータで対応
export default function App() {
  return (
    <>
      <ul>
        <li><NavLink className={ isCurrent } to="/article/0">
          グー</NavLink></li>
        <li><NavLink className={ isCurrent } to="/article/1">
          チョキ</NavLink></li>
        <li><NavLink className={ isCurrent } to="/article/2">
          パー</NavLink></li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
