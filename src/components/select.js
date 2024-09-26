import React from "react";
import { motion } from "framer-motion";


// عرض المصفوفة او عصنر واحد من المصفوفة 
const Select = (prop) => {
  return (
    <>
      <motion.div
        className="bottom-sheet"
        variants={prop.variants}
        animate={prop.showList ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
      >
        {prop.selectedProperty ? (
          <div className="property-details">
            <h2>{prop.selectedProperty?.name}</h2>
            <p>Price: {prop.selectedProperty?.price} SAR</p>
            <p>{prop.propselectedProperty?.description}</p>
            <button
              onClick={() => prop.setShowList(false)}
              className="close-button"
            >
              Close
            </button>
          </div>
        ) : (
          prop.fakeData.map((item) => (
            <div
              key={item.id}
              className="property-details"
              onClick={() => prop.setSelectedProperty(item)}
            >
              <h2>{item.name}</h2>
              <p>Price: {item.price} SAR</p>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </motion.div>

      {/* Button to show the list of all properties */}
      <button onClick={prop.handleShowList} className="show-list-button">
        عرض كل الشقق
      </button>
    </>
  );
};

export default Select;
