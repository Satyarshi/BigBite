import React from "react";

const RestaurantCard = ({ item }) => {
  return (
    <div className="flex flex-col flex-wrap mb-8 mr-16 ml-2">
      <img
        className="w-60 h-60 min-w-60 min-h-60 rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.cloudinaryImageId}`}
        alt=""
      />
      <p className="text-lg font-bold">{item.name}</p>
      <div className="flex items-center">
        <img
          className="w-5 h-5 mr-1"
          src="https://img.icons8.com/?size=100&id=zX00FT5x6S7M&format=png&color=000000"
          alt=""
        />
        <p className="text-sm font-semibold">
          {item.avgRating} • {item.slaString}
        </p>
      </div>
      <p className="text-base">
        {item.cuisines.slice(0, 3).join(", ")}
        {item.cuisines.length > 3 && "..."}
      </p>
      <p className="text-base">{item.areaName}</p>
    </div>
  );
};

export default RestaurantCard;
