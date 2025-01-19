import React, { useState, useEffect } from "react";
import Popup from "../components/Popup";
import p1 from "../assets/cse-p-1.jpg";
import p2 from "../assets/cse-p-2.jpg";
import p3 from "../assets/cse-p-2-1.jpg";
import p4 from "../assets/cse-p-2-2.jpg";
import p5 from "../assets/cse-p-1-1.jpg";
import p6 from "../assets/cse-p-1-2.jpg";
import t1 from "../assets/t-1.png";
import t2 from "../assets/t-2.png";
import t3 from "../assets/t-3.png";
import p11 from "../assets/p1.png";
import p12 from "../assets/p2.png";
import p13 from "../assets/p3.png";
import p14 from "../assets/p4.png";
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import buy1 from "../assets/buy1.png"
import buy2 from "../assets/buy2.png"
import buy3 from "../assets/buy3.png"
import buy4 from "../assets/buy4.png"
import sc1 from "../assets/sc1.png"
import sc2 from "../assets/sc2.png"
import sc3 from "../assets/sc3.png"
import sc4 from "../assets/sc4.png"
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
    price: 90,
    category: "websites",
  },
  {
    id: 2,
    title: "Education Website",
    description:
      "Welcome to Educe, a fully interactive platform developed for education.",
    des: "Welcome to Education website, a fully interactive platform developed using PHP, HTML, CSS, and JavaScript. Our website combines dynamic backend functionality with a sleek, responsive front-end design to offer a seamless user experience across all devices.",
    img: p2,
    images: [p2, p3, p4],
    price: 90,
    category: "websites",
  },
  {
    id: 3,
    title: "ToDo List Website",
    description:
      "Welcome to ToDo, a fully interactive platform developed for your daily tag.",
    des: "Welcome to ToDo website, a fully interactive platform developed using  HTML, CSS, and JavaScript. Our website combines responsive front-end design to offer a seamless user experience across all devices.",
    img: t2,
    images: [t1,t2,t3],
    price: 90,
    category: "websites",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Welcome to Portfolio, a fully interactive platform developed for your daily tag.",
    des: "Welcome to Portfolio website, a fully interactive platform developed using  HTML, CSS, and JavaScript. Our website combines responsive front-end design to offer a seamless user experience across all devices.",
    img: p11,
    images: [p11,p12,p13,p14],
    price: 90,
    category: "websites",
  },
  {
    id: 5,
    title: "Drivegallary Website",
    description:
      "Welcome to Drivegallary, a fully interactive platform developed for your daily tag.",
    des: "Welcome to Drivegallary website, a fully interactive platform developed using  HTML, CSS, and JavaScript. Our website combines responsive front-end design to offer a seamless user experience across all devices.",
    img: c1,
    images: [c1,c2,c3,c4],
    price: 90,
    category: "websites",
  },
  {
    id: 6,
    title: "Shoping Website",
    description:
      "Welcome to shoping, a fully interactive platform developed for your daily tag.",
    des: "Welcome to shoping website, a fully interactive platform developed using  HTML, CSS, and JavaScript. Our website combines responsive front-end design to offer a seamless user experience across all devices.",
    img: buy1,
    images: [buy1,buy2,buy3,buy4],
    price: 90,
    category: "websites",
  },
  {
    id: 7,
    title: "Swimming class Website",
    description:
      "Welcome to Swimming class, a fully interactive platform developed for your daily tag.",
    des: "Welcome to Swimming class website, a fully interactive platform developed using  HTML, CSS, and JavaScript. Our website combines responsive front-end design to offer a seamless user experience across all devices.",
    img: sc1,
    images: [sc1,sc2,sc3,sc4],
    price: 90,
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
                  <a href="/orderdetails" className="button">
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
