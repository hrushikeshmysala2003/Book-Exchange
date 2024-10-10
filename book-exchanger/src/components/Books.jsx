import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { server } from "../redux/store";

function Books() {
  // const book = {
  //     name: "Importance of Book Exchange",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, asperiores blanditiis dignissimos enim minima delectus, commodi repellendus perspiciatis libero, modi voluptatibus sapiente praesentium beatae repellat! Voluptates rerum animi doloremque laudantium.",
  //     img:{
  //         url:'https://bookxchange.in/assets/img/blog/blog1.jpg'
  //     },
  //     price: 100,
  // }
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${server}/getallbooks`);

      setData(res.data.books);
    }

    getData();
  }, []);
  console.log(data);
  return (
    <>
      <div>
        <div className="text-center text-[36px] text-[#363A45] py-[2rem]">
          <h2>
            Best Selling{" "}
            <span class="bg-blue-100 text-blue-800 text-[36px] font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Books
            </span>
          </h2>
        </div>

        <div className="bg-[#F5F5F5] w-full flex justify-center p-[3rem]">
          <div className="flex flex-wrap justify-center w-[90%] gap-[2rem]">
            {/* <Card book={book} />
                        <Card book={book} />
                        <Card book={book} /> */}
            {data.map((book) => {
              const book_details = {
                name: book.title,
                img: book.image,
                description: book.description,
                price: book.price,
                _id: book._id,
              };

              return <Card book={book_details} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
