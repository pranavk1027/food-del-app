import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"
const ExploreMenu = ({category,setcategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore out menu</h1>
        <p className='explore-menu-text'>Navigate your way through the app with ease using our streamlined menu! Whether you're exploring the latest items, customizing your experience, or checking out exciting upgrades, everything you need is just a tap away. Simply select a section to dive into curated content and tools designed to enhance your journey. The intuitive layout keeps your favorite features at your fingertips, ensuring a seamless, enjoyable experience every time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (<div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                     <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                     <p>{item.menu_name}</p>
                </div>)
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
