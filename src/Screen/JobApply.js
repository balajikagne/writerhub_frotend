import React, { useState, useEffect } from "react";
import JobPopup from "./JobPopup";
import p1 from "../assets/cse-p-1.jpg";
import p2 from "../assets/cse-p-2.jpg";
import p3 from "../assets/cse-p-2-1.jpg";
import "./JobApply.css"; // Import the CSS file
import LoadingSpinner from "../components/LoadingSpinner";

const cardData = [
  {
    id: 1,
    title: "Salon Website",
    description: "Your ultimate destination for beauty and relaxation.",
    des: "Detailed description of the salon website project.",
    image: p3,
    price: 450,
    category:"software"
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "The future of online shopping.",
    des: "Detailed description of the e-commerce website project.",
    image: p2,
    price: 650,
    category:"software"
  },
];

function JobApply() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openPopup = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  // Filter and search logic with loading state
  useEffect(() => {
    if (searchQuery || filter||" ") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false after a delay (500ms for example)
      }, 500);

      return () => clearTimeout(timer); // Clear the timer on cleanup
    }
  }, [searchQuery, filter]);

  const filteredData = cardData.filter((card) => {
    const matchesFilter = filter === "all" || filter === "" || card.category === filter;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container123">
      <h1 className="job-apply-heading">Job Apply</h1>

      {/* Search and Filter Section */}
      <div className="searchFilterRow">
        <input
          type="text"
          placeholder="Search job..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchInput"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filterSelect"
        >
          <option value="all">All Jobs</option>
          <option value="software">Software developer</option>
          <option value="account">Writer</option>
        </select>
        <button onClick={() => setSearchQuery("")} className="searchButton">
          Clear
        </button>
      </div>

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="loading-container">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="outer_containerjob">
          {filteredData.length > 0 ? (
            filteredData.map((card) => (
              <div className="card" key={card.id}>
                <img src={card.image} alt={card.title} className="image" />
                <h2 className="headline">{card.title}</h2>
                <p className="description">{card.description}</p>
                <div className="buttons">
                  <button onClick={() => openPopup(card)} className="button">
                    Description
                  </button>
                  <a href="/apply" className="button">Apply</a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-jobs-message">Job Not Found</div>
          )}
        </div>
      )}

      {selectedCard && (
        <JobPopup isOpen={isPopupOpen} onClose={closePopup} card={selectedCard} />
      )}
    </div>
  );
}

export default JobApply;
