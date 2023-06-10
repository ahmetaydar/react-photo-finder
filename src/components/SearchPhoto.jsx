import React, { useState } from "react";

import axios from "axios";

const SearchPhoto = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=RNec4Epc7hS_Fxmc-lNqT5FFDAaVW89Kh2ZnQGAdZaw`
      );
      setImages(response.data.results);
    } catch (error) {
      console.error(error);
    }
    setSearchTerm("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSearch}>
        <label htmlFor="query" className="label">
          {""}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "landscape" or "Istanbul`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {images.map((image) => (
          <div className="card" key={image.id}>
            <img
              src={image.urls.full}
              alt={image.alt_description}
              className="card-image"
              width="50%"
              height="50%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPhoto;
