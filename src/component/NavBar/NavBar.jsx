import './NavBar.css'


function NavBar() {

  var urlStart = "/minecraftStats";
  return (
    <ul className='navbar--ul'>
      <li><a href={urlStart + "/crafted"}>Crafted</a></li>
      <li><a href={urlStart + "/used"}>Used</a></li>
      <li><a href={urlStart + "/mined"}>Mined</a></li>
      <li><a href={urlStart + "/picked_up"}>Picked Up</a></li>
      <li><a href={urlStart + "/dropped"}>Dropped</a></li>
      <li><a href={urlStart + "/killed"}>Killed</a></li>
      <li><a href={urlStart + "/killed_by"}>Killed By</a></li>
      <li><a href={urlStart + "/custom"}>Custom</a></li>
    </ul>

  );
}

export default NavBar; 