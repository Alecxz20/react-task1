import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Book } from "./components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));

const library = [
  {
    name: "Harry Potter and the Philosopher's Stone",
    author: "J.K.Rowling",
    img: "https://m.media-amazon.com/images/I/5165He67NEL._SY300_.jpg",
    description:
      "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'",
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    author: "J.K.Rowling",
    img: "https://m.media-amazon.com/images/I/510CXXt9CqL._SY300_.jpg",
    description:
      "There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.",
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K.Rowling",
    img: "https://m.media-amazon.com/images/I/51n7uF9FfxL._SY300_.jpg",
    description:
      "Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.",
  },
  {
    name: "Harry Potter and the Goblet of Fire",
    author: "J.K.Rowling",
    img: "https://m.media-amazon.com/images/I/513TQ4ihqqL._SY300_.jpg",
    description:
      "There will be three tasks, spaced throughout the school year, and they will test the champions in many different ways ... their magical prowess - their daring - their powers of deduction - and, of course, their ability to cope with danger.",
  },
  {
    name: "Harry Potter and the Order of the Phoenix",
    author: "J.K.Rowling",
    img: "https://m.media-amazon.com/images/I/51iQwWIl+XL._SY300_.jpg",
    description:
      "You are sharing the Dark Lord's thoughts and emotions. The Headmaster thinks it inadvisable for this to continue. He wishes me to teach you how to close your mind to the Dark Lord.",
  },
  {
    name: "Harry Potter and the Half-Blood Prince",
    author: "J.K.Rowling",
    img: "https://m.media-amazon.com/images/I/51ibZl+yt8L._SY300_.jpg",
    description:
      "There it was, hanging in the sky above the school: the blazing green skull with a serpent tongue, the mark Death Eaters left behind whenever they had entered a building... wherever they had murdered...",
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    author: "J.K.Rowling",
    img: "https://m.media-amazon.com/images/I/51-GvIoiqYL._SY300_.jpg",
    description:
      "Give me Harry Potter,' said Voldemort's voice, 'and none shall be harmed. Give me Harry Potter, and I shall leave the school untouched. Give me Harry Potter, and you will be rewarded.",
  },
];

function Booklist() {
  return (
    <section className="bookList">
      {library.map((book, index) => {
        return <Book {...book} key={index} />;
      })}
    </section>
  );
}

root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);
