import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";

const Aside = () => {
  const hashtags = [
    "#döner",
    "#gibi",
    "#lotr",
    "#pdr",
    "#pdrcileryatıyormu?",
    "#yazılım",
    "#adanamerkez",
    "#adananındegisenhavadurumu",
  ];

  const extractHashtags = (text) => {
    const hashtags = text.match(/#[\w]+/g);
    return hashtags ? hashtags.join(" ") : "";
  };

  return (
    <div className="max-xl:hidden border border-zinc-600 rounded">
      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-white sr-only"
        ></label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 text-2xl pointer-events-none">
            <CiSearch className="w-6 h-6 text-zinc-300" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-14 text-s text-white outline-none rounded-full bg-gray-700 dark:bg-gray-700 placeholder:text-lg"
            placeholder="Ara"
          />
        </div>
      </form>
      <div className="m-10 h-full w-[350px] border border-zinc-600 rounded-md p-4">
        <h2 className="text-lg font-bold mb-4">İlgini çekebilecek gündemler</h2>
        {hashtags.length > 0 ? (
          hashtags.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <p>{item}</p>
              <FiMoreHorizontal className="text-zinc-600 cursor-pointer transition hover:scale-150" />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Aside;

/* import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";

const Aside = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://twitter154.p.rapidapi.com/search/search/continuation",
        params: {
          query: "#python",
          section: "top",
          min_retweets: "20",
          limit: "10",
          continuation_token:
            "DAACCgACF_Sz76EAJxAKAAMX9LPvoP_Y8AgABAAAAAILAAUAAABQRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUFVWDlJWmx4cHZBZkJmMG5RNUxHdUVQRi9TdTZPSGJzQ0VYOUp6Y3psdUJ3UmYwbFE3Q1dxQWsIAAYAAAAACAAHAAAAAAwACAoAARf0hmXGm8B8AAAA",
          min_likes: "20",
          start_date: "2022-01-01",
          language: "tr",
        },
        headers: {
          "x-rapidapi-key":
            "30418d35bamsh50070aa98b8accbp1ebf89jsnb5d8639c1cb0",
          "x-rapidapi-host": "twitter154.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.results);
        console.log(response.data.results); // Verileri konsola yazdırır
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const extractHashtags = (text) => {
    const hashtags = text.match(/#[\w]+/g);
    return hashtags ? hashtags.join(" ") : "";
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-xl:hidden border border-zinc-600 rounded">
      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-white sr-only "
        ></label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 text-2xl pointer-events-none">
            <CiSearch className="w-6 h-6 text-zinc-300" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-14 text-s text-white outline-none rounded-full bg-gray-700 dark:bg-gray-700 placeholder:text-lg"
            placeholder="Ara"
          />
        </div>
      </form>
      <div className="m-10 h-full w-[350px] border border-zinc-600 rounded-md p-4">
        <h2 className="text-lg font-bold mb-4">İlgini çekebilecek gündemler</h2>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <p>{extractHashtags(item.text)}</p>
              <FiMoreHorizontal className="text-zinc-600 cursor-pointer transition hover:scale-150" />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Aside; */
