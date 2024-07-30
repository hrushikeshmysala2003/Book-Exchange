import React from "react";
import { Link } from "react-router-dom";
// import "./profile.css"
import Navbar from "../../components/Navbar";

const Profile = ({ user }) => {
  const book = {
    _id: "66a7b1c0fb23b8dc1e3d9631",
    title: "Computer science",
    author: "Hrushikesh",
    image: {
      public_id: "cs6jfusg7s3d64utcjso",
      url: "https://res.cloudinary.com/dwna7axtx/image/upload/v1694170382/fqbqvpcldfxod5315chj.jpg",
    },
    category: "educational",
    description: "This book will help u",
    price: "1000",
    status: "new",
    user: "64fb0432c35277d057f7640e",
    created_at: { $date: { $numberLong: "1722266048439" } },
    updated_at: { $date: { $numberLong: "1722266048439" } },
    __v: { $numberInt: "0" },
  };
  return (
    <div className="">
      <Navbar />
      <div className="max-h-screen pt-20 grid grid-cols-1 md:grid-cols-2 sm:overflow-hidden">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magnam
          eligendi maxime tempore recusandae vitae, provident sapiente impedit
          reprehenderit eius temporibus inventore, ipsa natus exercitationem ut
          similique sequi ullam? Aspernatur facere ut culpa nemo odit nesciunt
          quaerat voluptatem libero earum! Non debitis ea, iusto nesciunt
          incidunt repellendus consequuntur accusantium, veritatis odit eos
          nulla! Incidunt exercitationem, animi quia pariatur officiis
          consequatur quam consequuntur obcaecati quas, quae voluptate
          recusandae nisi ratione in qui magnam voluptatibus tempora ab cum quis
          doloribus aut delectus nesciunt temporibus! Officiis delectus
          laboriosam vitae repudiandae ut. Ipsum voluptatum id, optio sed
          reprehenderit vitae, a dolorem, iste vel rem tenetur distinctio quo
          sequi dolorum cumque praesentium commodi minus aspernatur. Aperiam
          magnam nobis tenetur, temporibus praesentium harum? Atque in quae
          voluptatum delectus harum, beatae ad nostrum molestias qui magnam sed
          voluptates aliquam quaerat sunt hic, alias nobis nulla eum corporis
          fuga enim saepe. Ut sapiente officiis distinctio harum ab qui labore
          possimus recusandae beatae esse natus porro animi inventore enim
          omnis, perspiciatis necessitatibus officia quae nesciunt repellendus
          voluptate nam obcaecati. Eveniet ipsa quaerat temporibus voluptatum
          ratione ipsum provident perspiciatis labore qui optio consequuntur
          magnam itaque expedita, impedit eaque maxime inventore cumque.
          Voluptatem saepe magni debitis non laboriosam libero iste quod
          consectetur magnam natus, modi similique molestiae quis totam tempora,
          itaque tempore! Dolore aliquid aperiam commodi veniam suscipit, atque
          quidem consequatur repudiandae, facilis velit incidunt quam facere
          dolores laborum vero quis. Animi nemo necessitatibus quae architecto
          perspiciatis culpa ipsa dolorem iusto blanditiis harum.
        </div>

        <div className="max-h-screen overflow-y-scroll">
          <h2 className="text-3xl font-bold text-center">My Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
            {/* Component */}
            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500  justify-self-center ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>

            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500 justify-self-center  ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>

            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500 justify-self-center  ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>

            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500  justify-self-center ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>

            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500  justify-self-center ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>
            {/* Component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
