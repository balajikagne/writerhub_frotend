import React from "react";

function WordScreen() {
  return (
    <>
      <div className="card_container_outer" style={styles.outer_container}>
        {/* Card 1 */}
        {/* <div className="card" style={styles.card}>
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            style={styles.image}
          />
          <h2 style={styles.headline}>Product Title</h2>
          <p style={styles.description}>
            This is a brief description of the product. It highlights key
            features and benefits.
          </p>
          <div style={styles.buttons}>
            <a href="#description" style={styles.button}>
              Description
            </a>
            <a href="#order" style={styles.button}>
              Order
            </a>
          </div>
        </div> */}

        {/* Card 2 */}
        {/* <div className="card" style={styles.card}>
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            style={styles.image}
          />
          <h2 style={styles.headline}>Product Title</h2>
          <p style={styles.description}>
            This is a brief description of the product. It highlights key
            features and benefits.
          </p>
          <div style={styles.buttons}>
            <a href="#description" style={styles.button}>
              Description
            </a>
            <a href="#order" style={styles.button}>
              Order
            </a>
          </div>
        </div> */}

        {/* Card 3 */}
        {/* <div className="card" style={styles.card}>
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            style={styles.image}
          />
          <h2 style={styles.headline}>Product Title</h2>
          <p style={styles.description}>
            This is a brief description of the product. It highlights key
            features and benefits.
          </p>
          <div style={styles.buttons}>
            <a href="#description" style={styles.button}>
              Description
            </a>
            <a href="#order" style={styles.button}>
              Order
            </a>
          </div>
        </div> */}

        {/* Card 4
        <div className="card" style={styles.card}>
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            style={styles.image}
          />
          <h2 style={styles.headline}>Product Title</h2>
          <p style={styles.description}>
            This is a brief description of the product. It highlights key
            features and benefits.
          </p>
          <div style={styles.buttons}>
            <a href="#description" style={styles.button}>
              Description
            </a>
            <a href="#order" style={styles.button}>
              Order
            </a>
          </div>
        </div> */}
        Coming Soon ....
      </div>
    </>
  );
}

const styles = {
  // card: {
  //   width: "300px",
  //   border: "1px solid #ddd",
  //   borderRadius: "8px",
  //   overflow: "hidden",
  //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  //   textAlign: "center",
  //   backgroundColor: "#fff",
  //   margin: "20px",
  // },
  // image: {
  //   width: "100%",
  //   height: "200px",
  //   objectFit: "cover",
  // },
  // headline: {
  //   fontSize: "1.5em",
  //   margin: "20px 0 10px 0",
  // },
  // description: {
  //   fontSize: "1em",
  //   color: "#555",
  //   margin: "0 15px 20px 15px",
  // },
  // buttons: {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   marginBottom: "20px",
  // },
  // button: {
  //   padding: "10px 20px",
  //   backgroundColor: "#007BFF",
  //   color: "#fff",
  //   textDecoration: "none",
  //   borderRadius: "5px",
  //   fontSize: "1em",
  //   cursor: "pointer",
  // },
  outer_container: {
    display: "flex",
    flexWrap: "wrap", // Corrected property name
    justifyContent: "center",
    alignItems: "center", // Corrected property name
    width: "100%",
    height: "100%",
    fontSize:"2.5rem",
    color:"white"
  },
};

export default WordScreen;
