import React from "react";
import Sidebar from "../components/Sidebar";
import ItemOne from "../components/ItemCard";
import { products } from "../data/products";

function Katalog(){
    return(
        <div>
            <div className="SidebarWrapperKatalog">
                <Sidebar/>
            </div>
            <div className="ItemsWrapper">
                <div className="KatalogItem">
                    <ItemOne products={products[0]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[1]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[2]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[3]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[4]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[5]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[6]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[7]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[8]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={products[9]}/>
                </div>
            </div>
            
        </div>
    )
}

export default Katalog