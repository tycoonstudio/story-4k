import React, { useState } from "react";
import "./_style.scss";

import image1 from "../../../../assets/images/video-editing5.jpg";

const Template = () => {
  const initialFilter = localStorage.getItem("selectedFilter") || "All";
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

  // Sample data (replace with actual data structure)
  const templateData = [
    { id: 1, name: "Template 1", category: "Trending", image: image1 },
    { id: 2, name: "Template 2", category: "New Arrivals", image: image1 },
    { id: 3, name: "Template 3", category: " ", image: image1 },
    { id: 4, name: "Template 4", category: "Trending", image: image1 },
    { id: 5, name: "Template 5", category: "New Arrivals", image: image1 },
  ];

  // Filter function based on selectedFilter state
  const filteredItems =
    selectedFilter === "All"
      ? templateData
      : templateData.filter((template) => template.category === selectedFilter);

  return (
    <div className="template-container">
      <div className="filters">
        <div
          className={`filter-item ${selectedFilter === "All" ? "active" : ""}`}
          onClick={() => setSelectedFilter("All")}
        >
          <p>All</p>
        </div>

        <div
          className={`filter-item ${
            selectedFilter === "Trending" ? "active" : ""
          }`}
          onClick={() => setSelectedFilter("Trending")}
        >
          <p>Trending</p>
        </div>
      </div>

      <div className="template-container">
        {filteredItems.map((template) => (
          <div key={template.id} className="template-card">
            <img
              src={template.image}
              alt={template.name}
              className="item-image"
            />

            <div className="template-detail">
              <p className="template-detail-title">{template.name}</p>
              <p className="template-detail-description">{template.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
