import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({data}) => {
  const { genres } = useSelector((state) => state.home);
  return <div className="genres">
    {data?.map((item) => {
        if (!genres[item]) return null
        return <div key={item} className="genre">
            {genres[item]}
        </div>
    })}
  </div>;
};

export default Genres;
