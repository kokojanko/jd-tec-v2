import React from "react";
import Sidebar from "../components/Sidebar";
import ItemOne from "../components/ItemCard";
import { electronics } from "../data/electronics";
import { other } from "../data/other";
import ComponentAffix from "../components/Affix";

function Katalog(){
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
                <div className="KatalogItem">
                    <ItemOne products={other[0]}/>
                </div>
                <div className="KatalogItem">
                    <ItemOne products={other[1]}/>
                </div>
                <div className="KatalogItem">
                </div>
            </div>
            <ComponentAffix />
        </div>
    )
}

export default Katalog