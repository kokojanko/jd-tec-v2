import React from "react";
import Sidebar from "../components/Sidebar";
import ItemOne from "../components/ItemCard";
import { other } from "../data/other";
import ComponentAffix from "../components/Affix";

function Other() {
  return (
    <div>
      <div className="SidebarWrapperKatalog">
        <Sidebar />
      </div>
      <div className="ItemsWrapper">
        <div className="KatalogItem">
          <ItemOne products={other[0]} />
        </div>
        <div className="KatalogItem">
          <ItemOne products={other[1]} />
        </div>
        <div className="KatalogItem">
          <ItemOne products={other[2]} />
        </div>
        <div className="KatalogItem">
          <ItemOne products={other[3]} />
        </div>
      </div>
      <ComponentAffix />
    </div>
  );
}

export default Other;
