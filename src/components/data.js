import sppu from "../assets/sppu-pic.png";
import fy from "../assets/fy-logo.png";
import betechnos from "../assets/betechnos_logo.png"
import part_1_assi from "../assets/part_ass_1.jpg"
import part_2_assi from "../assets/reactjs_pt.jpg"
export const data = {
  UniversityA: {
    image: sppu,
    departments: {
      FE: {
        image: fy,
        years: {
          Sem1: {
            image: fy,
            subjects: [
              {
                name: "Engineering Mathematics- I",
                image: fy,
                img: { img1: "", img2: "", img3: "" },
                dsc: "The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",
                price: 405,
              },
              {
                name: "Engineering Physics",
                image: fy,
                img: { img1: "", img2: "", img3: "" },
                dsc: "The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",
                price: 405,
              },
              {
                name: "Basic Electronics Engineering",
                image: fy,
                img: { img1: "", img2: "", img3: "" },
                dsc: "The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",
                price: 405,
              },
              {
                name: "Engineering Graphics",
                image: fy,
                img: { img1: "", img2: "", img3: "" },
                dsc: "The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",
                price: 405,
              },
              {
                name: "Fundamentals of programming Languages",
                image: fy,
                img: { img1: "", img2: "", img3: "" },
                dsc: "The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",
                price: 405,
              },
            ],
          },
          Sem2: {
            image: fy,
            subjects: [
              { name: "Engineering Mathematics-II", image: fy },
              { name: "Engineering Chemistry", image: fy },
              { name: "Basic Electrical Engineering", image: fy },
              { name: "Engineering Mechanics", image: fy },
              { name: "Programming and Problem Solving", image: fy },
            ],
          },
        },
      },
    },
  },
  
};

export const data1 = [
  {
    image: betechnos, // Replace with actual image path
    name: "Web Development Notes",
    subObjects: [
      {
        name: "Notes 1",
        image: part_1_assi, // Replace with actual image path
        description: "Frontend (HTML, CSS, and JavaScript) Rs 19 /-",
        link:"https://drive.google.com/file/d/1-RG6EWh7rqEYAi_OcQwdGmsdZbaKb6J4/view?usp=drivesdk",
        buttons: {
          actionButton: "Preview",
          buyButton: "Buy Now",
        },
      },
      {
        name: "Notes 2",
        image: part_2_assi, // Replace with actual image path
        description: "Reactjs Part -1 Rs 19 /-",
        link:"https://drive.google.com/file/d/11iE10PzOFVzivwgKfyvtJShRbsRVmJr3/view?usp=drivesdk",
        buttons: {
          actionButton: "Preview",
          buyButton: "Buy Now",
        },
      },
    ],
  },
];

