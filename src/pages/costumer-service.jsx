import { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function CustomerService() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Pesan/Keluhan:", message);

    setUsername("");
    setMessage("");
    alert("Pesan kamu sudah dikirim, makasih yaa");
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="bg-white py-10 px-6 md:px-10 rounded-xl shadow-lg max-w-2xl mx-auto mt-25 my-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Kirim Pesan / Keluhan 💬
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Masukkan username kamu..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pesan / Keluhan
              </label>
              <textarea
                id="message"
                placeholder="Tulis pesan atau keluhan kamu di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-y min-h-[100px] focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-300 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CustomerService;
