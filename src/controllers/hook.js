import React, { useState } from "react";

const Hook = () => {

  // التحكم في المشروع 
  const [showList, setShowList] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const variants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
  };

  const handleMapClick = () => {
    setShowList(false);
    setSelectedProperty(null);
  };

  const handleShowList = () => {
    setShowList(true);
    setSelectedProperty(null);
  };

  return {
    showList,
    handleMapClick,
    variants,
    selectedProperty,
    setSelectedProperty,
    setShowList,
    handleShowList
  };
};

export default Hook;
