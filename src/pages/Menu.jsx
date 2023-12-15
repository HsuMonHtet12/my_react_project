
import "../styles/Menu.css";
import {Menulist}from "../helpers/Menulist";
import MenuItem from "../components/MenuItem";
function Menu(){
    return(
        <div className="menu">
            <div className="menuTitle">Cuisine</div>
            <div className="menuList">
                {Menulist.map((menuItem,index)=>{
                return <MenuItem 
                key={index}
                item={menuItem}
                image={menuItem.image} 
                name={menuItem.name}
                price={menuItem.price}/>;
            })}</div>

        </div>
    )
}
export default Menu;