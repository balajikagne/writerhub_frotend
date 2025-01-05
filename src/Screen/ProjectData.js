import React, { useState, useEffect } from "react";
import Popup from "../components/Popup";
import p1 from "../assets/cse-p-1.jpg";
import p2 from "../assets/cse-p-2.jpg";
import p3 from "../assets/cse-p-2-1.jpg";
import p4 from "../assets/cse-p-2-2.jpg";
import p5 from "../assets/cse-p-1-1.jpg";
import p6 from "../assets/cse-p-1-2.jpg";
import LoadingSpinner from "../components/LoadingSpinner"; // Assuming you have this component
import "./ProjectData.css"; // Import the CSS file
import ComingSoon from "../components/ComingSoon";

const cardData = [
  {
    id: 1,
    title: "Salon Website",
    description:
      "Welcome to Salon Website – your ultimate destination for beauty and relaxation.",
    des: "your ultimate destination for beauty and relaxation. Our salon website is designed with a sleek, modern look using HTML, CSS, JavaScript, and ReactJS to provide a smooth and engaging user experience. Explore our range of services, from hair styling and skincare to makeup and spa treatments, all crafted to meet your unique needs.",
    img: p1,
    images: [p1, p5, p6],
    price: 450,
    category: "websites",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "Welcome to Educe, a fully interactive platform developed for education.",
    des: "Welcome to Education website, a fully interactive platform developed using PHP, HTML, CSS, and JavaScript. Our website combines dynamic backend functionality with a sleek, responsive front-end design to offer a seamless user experience across all devices.",
    img: p2,
    images: [p2, p3, p4],
    price: 450,
    category: "websites",
  },
];

function ProjectData() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const openPopup = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  // Simulate loading when searching or filtering
  useEffect(() => {
    if (searchQuery || filter) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false); // End loading after 2 seconds
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchQuery, filter]);

  // Filter and search logic
  const filteredData = cardData.filter((card) => {
    const matchesFilter =
      filter === "all" || filter === "" || card.category === filter;
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <div className="searchFilterRow">
        <input
          type="text"
          placeholder="Search project..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchInput"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filterSelect"
        >
          <option value="all">All Projects</option>
          <option value="websites">websites</option>
          <option value="android apps">apps</option>
        </select>
        <button onClick={() => setSearchQuery("")} className="searchButton">
          Clear
        </button>
      </div>

      {/* Display loading spinner */}
      {isLoading ? (
        <div className="loadingContainer">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="outer_container">
          {filteredData.length > 0 ? (
            filteredData.map((card) => (
              <div className="card" key={card.id}>
                <img src={card.img} alt={card.title} className="image" />
                <h2 className="headline">{card.title}</h2>
                <p className="description">{card.description}</p>
                <h4 className="headline1">Rs - {card.price}</h4>
                <div className="buttons">
                  <button onClick={() => openPopup(card)} className="button">
                    Description
                  </button>
                  <a href="/payment" className="button">
                    Buy
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-jobs-message">
              <ComingSoon />
            </div>
          )}
        </div>
      )}

      {/* Popup Component */}
      {selectedCard && (
        <Popup isOpen={isPopupOpen} onClose={closePopup} card={selectedCard} />
      )}
    </>
  );
}

export default ProjectData;
