import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from '../../component/NavBar/NavBar';
function Root() {
  return (
    <div className="">
      <header className="myHeader">
        <h1>Minecraft Stats</h1>
      </header>
      <NavBar />
      <main className="myMain">
        <Outlet />
      </main>
      <footer className="myFooter">
      <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default Root;