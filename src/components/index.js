import React from "react";
import MapComponent from "./map";
import Select from "./select";
import Hook from "../controllers/hook";
import { fakeData } from "../data";
import './index.css';

const index = () => {
  const {
    showList,
    handleMapClick,
    variants,
    selectedProperty,
    setSelectedProperty,
    setShowList,
    handleShowList,
  } = Hook();
  return (
    <div className="container">
      <MapComponent
        setShowList={setShowList}
        setSelectedProperty={setSelectedProperty}
        fakeData={fakeData}
      />
      <Select
        setShowList={setShowList}
        showList={showList}
        handleMapClick={handleMapClick}
        variants={variants}
        selectedProperty={selectedProperty}
        fakeData={fakeData}
        handleShowList={handleShowList}
        setSelectedProperty={setSelectedProperty}

      />
    </div>
  );
};

export default index;
