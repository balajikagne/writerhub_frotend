import sppu from "../assets/sppu-pic.png";
import fy from "../assets/fy-logo.png";
import betechnos from "../assets/betechnos_logo.png"
import part_1_assi from "../assets/part_ass_1.jpg"
import part_2_assi from "../assets/reactjs_pt.jpg"
import javascript from "../assets/full_javascript.jpg"
import sql from "../assets/sql_pre_photo.jpg"
import css from "../assets/css_hand_notes.jpg"
import java from "../assets/java_hadnwritten_notes.jpg"
import mern from "../assets/full_stack_devlopment.png"
import javab from "../assets/Java_p_bnotes.jpg"
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
      {
        name: "Notes 3",
        image: javascript, // Replace with actual image path
        description: "full javascript Rs 59 /-",
        link:"https://drive.google.com/file/d/15tUQvvx3Sw4un7rUJfTN5abUTgo7LPgJ/view?usp=sharing",
        buttons: {
          actionButton: "Preview",
          buyButton: "Buy Now",
        },
      },
      {
        name: "Notes 4",
        image: css, // Replace with actual image path
        description: "full handwritten html css notes Rs 59 /-",
        link:"https://drive.google.com/file/d/15qYE64i8rADKXv1WzhPgkpq2hCjD0k4G/view?usp=sharing",
        buttons: {
          actionButton: "Preview",
          buyButton: "Buy Now",
        },
      },
      {
        name: "Notes 5",
        image: java, // Replace with actual image path
        description: "full handwritten java notes Rs 59 /-",
        link:"https://drive.google.com/file/d/15eW5-sPbzUXbm4xDrJHYn8Ycip2FnmAQ/view?usp=sharing",
        buttons: {
          actionButton: "Preview",
          buyButton: "Buy Now",
        },
      },
      {
        name: "Notes 6",
        image: sql, // Replace with actual image path
        description: "full handwritten sql notes Rs 59 /-",
        link:"https://drive.google.com/file/d/15ejCwi09G9tgZedE4zZO7vdWRP0J5Giu/view?usp=sharing",
        buttons: {
          actionButton: "Preview",
          buyButton: "Buy Now",
        },
        {
        name: "Notes 7",
        image: javab, // Replace with actual image path
        description: "java notes Rs 59 /-",
        link:"https://drive.google.com/file/d/185W89FV065Tx84cuVMgx122cLVw1yDDU/view?usp=drivesdk",
        buttons: {
          actionButton: "Preview",
          buyButton: "Buy Now",
        },
      },
    ],
  },
];

export const data2=[]

export const courses = [
  {
    id: 1,
    title: "Full stack Development",
    description: "Comprehensive Learning 📚Master the entire Full Stack Development journey—from front-end essentials to advanced back-end concepts.Affordable Price 💰Access this premium course for just ₹399, a small investment to achieve your big career goals.Special Offer for Interns 🎓Get this course FREE when you enroll in our internship program. A double win for your learning and experience!Lifetime Access 🔑Enjoy unrestricted, lifetime access to all course materials—learn at your own pace, anytime, anywhere.Real-World Projects 💻Work on hands-on projects that will help you apply your knowledge and impress future employers.Expert Guidance 👨‍🏫Learn from top-notch instructors with years of industry experience and insider knowledge.Community Support 🤝Be part of a vibrant community of learners and mentors. Share knowledge, solve challenges, and grow together.Certification of Completion 🏆Receive an industry-recognized certificate to showcase your skills and boost your resume.",
    image:mern,
    lectures: [
      { id: 1,image:mern, title: "Basics introduction",link: "https://drive.google.com/file/d/11HTjfKIynplMdubd1jmeW8f1hwkiM6od/view?usp=drive_link" },
      { id: 2,image:mern, title: "html part - 1", link: "https://drive.google.com/file/d/13RrsqaNHPvrMhTGIWH7_vIZckTJ6Pk2b/view?usp=drive_link" },
      { id: 3,image:mern, title: "html part - 2", link: "https://drive.google.com/file/d/12XCTelDMqMFLELqaod8Ioz0B8iZ05KBS/view?usp=drive_link" },
      { id: 4,image:mern, title: "html part - 3", link: "https://drive.google.com/file/d/16yahk2vKPMMfk7elscbQ7bJ561TK1Ll6/view?usp=drive_link" },
      { id: 5,image:mern, title: "html part - 4", link: "https://drive.google.com/file/d/17N3FzlqMc_4rrj4HkBEWAXdiDa0n3pn8/view?usp=drive_link" },

    ],
  },
  // {
  //   id: 2,
  //   title: "JavaScript Mastery",
  //   description: "Master JavaScript for front-end and back-end development.",
  //   image: "https://via.placeholder.com/150?text=JavaScript",
  //   lectures: [
  //     { id: 1, title: "JavaScript Basics", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  //     { id: 2, title: "ES6 Features", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" },
  //   ],
  // },
];
