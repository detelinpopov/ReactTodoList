import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";

function App() {
  const [itemDetails, setItemDetails] = useState('');
  const displayActiveElement = (itemDetails) => {
    setItemDetails(itemDetails);
  }

  return (
    <div className="main-row">
      <div className="block">
        <Sidebar displayActiveElement={displayActiveElement}></Sidebar>
      </div>
      <div className="block selected-item-details">
        {itemDetails}
      </div>
    </div>
  );
}

export default App;