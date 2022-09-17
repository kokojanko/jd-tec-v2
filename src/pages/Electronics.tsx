import React from "react";
import Sidebar from "../components/Sidebar";
import ItemOne from "../components/ItemCard";
import { electronics } from "../data/electronics";
import ComponentAffix from "../components/Affix";

function Electronics(){
    return(
        <div>
            <div className="SidebarWrapperKatalog">
                <Sidebar/>
            </div>
            <div className="ItemsWrapper">
                <div className="KatalogItem">
                    <ItemOne products={electronics[0]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[1]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[2]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[3]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[4]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[5]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[6]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[7]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[8]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={electronics[9]}/>
                </div>
                <ComponentAffix />
            </div>
        </div>
    )
}

export default Electronics