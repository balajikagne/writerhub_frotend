import sppu from "../assets/sppu-pic.png"
import cse from "../assets/computer.png";
import it from "../assets/it.png"
import mee from "../assets/mechanical.png"
import fy from "../assets/fy-logo.png"
// import entc from "../assets/entc.png"
// import civil from "../assets/civil-engineering.png"
// import electrical from "../assets/electrical.png"
export const data = {
  UniversityA: {
    image: sppu,
    departments: {
      FE: {
        image: fy,
        years: {
          Sem1: {
            image:fy,
            subjects: [
              { name: 'Engineering Mathematics- I', image: fy ,img:{img1:"",img2:"",img3:""},dsc:"The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",price:405},
              { name: 'Engineering Physics', image: fy,img:{img1:"",img2:"",img3:""},dsc:"",dsc:"The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",price:405},
              { name: 'Basic Electronics Engineering', image: fy ,img:{img1:"",img2:"",img3:""},dsc:"",dsc:"The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",price:405},
              { name: 'Engineering Graphics', image: fy,img:{img1:"",img2:"",img3:""},dsc:"",dsc:"The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",price:405},
              { name: 'Fundamentals of programming Languages', image: fy ,img:{img1:"",img2:"",img3:""},dsc:"",dsc:"The previous years' papers provided on this platform are for educational and personal use only. Unauthorized distribution, duplication, or sharing of this content is strictly prohibited and may result in legal or cyber claims. All rights are reserved by their respective owners. By purchasing, you agree to use this material responsibly and in compliance with applicable copyright laws.",price:405},
            ],
          },
          Sem2: {
            image: fy,
            subjects: [
              { name: 'Engineering Mathematics-II', image: fy },
              { name: 'Engineering Chemistry', image: fy },
              { name: 'Basic Electrical Engineering', image: fy },
              { name: 'Engineering Mechanics', image: fy },
              { name: 'Programming and Problem Solving', image: fy },
            ],
          },
        },
      },
      CSE: {
        image: cse,
        years: {
          Year1: {
            image: mee,
            subjects: [
              { name: 'Math', image: mee ,img:{img1:"",img2:"",img3:""},dsc:"",price:405},
              { name: 'Physics', image: mee,img:{img1:"",img2:"",img3:""},dsc:"",price:405},
            ],
          },
          Year2: {
            image: './assets/year2.jpg',
            subjects: [
              { name: 'Data Structures', image: mee },
              { name: 'Algorithms', image: mee },
            ],
          },
        },
      },
      IT: {
        image: it,
        years: {
          Year1: {
            image: mee,
            subjects: [
              { name: 'Math', image: mee },
              { name: 'Discrete Mathematics', image: mee },
            ],
          },
          Year2: {
            image: mee,
            subjects: [
              { name: 'Networks', image: mee},
              { name: 'Web Development', image: mee},
            ],
          },
        },
      },
      ME: {
        image: mee,
        years: {
          Year1: {
            image: mee,
            subjects: [
              { name: 'Math', image: mee },
              { name: 'Discrete Mathematics', image: mee},
            ],
          },
          Year2: {
            image: mee,
            subjects: [
              { name: 'Networks', image: mee },
              { name: 'Web Development', image: mee },
            ],
          },
        },
      },
    },
  },
//   UniversityB: {
//     image: universityBImg,
//     departments: {
//       // Departments for UniversityB with similar structure
//     },
//   },
};
