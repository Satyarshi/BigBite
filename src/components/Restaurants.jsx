import React from "react";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const restaurants = [
    {
      name: "Bakingoz Cake Zone",
      cloudinaryImageId: "1f776417d4fa3673258cc456cdd2ca37",
      areaName: "Raj Nagar",
      avgRating: "4.1",
      slaString: "45-50 mins",
      cuisines: ["Bakery"],
    },
    {
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      areaName: "Raj Nagar",
      avgRating: "4.3",
      slaString: "45-50 mins",
      cuisines: ["Pizzas"],
    },
    {
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      areaName: "P & T Colony",
      avgRating: "4.5",
      slaString: "25-30 mins",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    },
    {
      name: "ZAZA Mughal Biryani",
      cloudinaryImageId: "e12f3a72ab92442dc088f803a04d4293",
      areaName: "RDC",
      avgRating: "4.2",
      slaString: "25-35 mins",
      cuisines: ["Biryani", "North Indian", "Awadhi"],
    },
    {
      name: "Rollsking",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4d52afbb-4088-461e-9362-ff27ec3706fe_879431.jpg",
      areaName: "Crossing Republic",
      avgRating: "4.1",
      slaString: "45-50 mins",
      cuisines: ["Fast Food", "Rolls & Wraps"],
    },
    {
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      areaName: "Raj Nagar",
      avgRating: "4.4",
      slaString: "45-50 mins",
      cuisines: ["Burgers", "American"],
    },
    {
      name: "Kilo Curry",
      cloudinaryImageId: "h7reeamscnwoe026pirv",
      areaName: "Crossing Republic",
      avgRating: "4.1",
      slaString: "40-45 mins",
      cuisines: [
        "North Indian",
        "Chinese",
        "Italian",
        "Mexican",
        "Snacks",
        "Mughlai",
      ],
    },
    {
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_340382.JPG",
      areaName: "Raj Nagar",
      avgRating: "4.2",
      slaString: "35-40 mins",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    },
    {
      name: "M3 Momos",
      cloudinaryImageId: "60f6075bb5d24a7a99e13b12cf45920c",
      areaName: "Casa Woodstock Market",
      avgRating: "3.8",
      slaString: "50-55 mins",
      cuisines: ["Chinese"],
    },
    {
      name: "La Pino'z Pizza",
      cloudinaryImageId: "mkbgksj3ou3gsc7znsdd",
      areaName: "Raj Nagar",
      avgRating: "4.3",
      slaString: "50-55 mins",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    },
    {
      name: "Special Galawati Kabab",
      cloudinaryImageId: "fe071c984feb2dc7017ab928bd724c38",
      areaName: "Panchsheel Square Mall",
      avgRating: "4.0",
      slaString: "45-50 mins",
      cuisines: ["North Indian"],
    },
    {
      name: "Samosa Time",
      cloudinaryImageId: "c374a961da56fe216e89e8fae94b7f7a",
      areaName: "Gaur City 2",
      avgRating: "4.0",
      slaString: "50-55 mins",
      cuisines: ["Street Food", "Fast Food", "Desserts", "Beverages"],
    },
    {
      name: "BOX8 - Desi Meals",
      cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
      areaName: "Raj Nagar",
      avgRating: "4.3",
      slaString: "25-35 mins",
      cuisines: ["Biryani", "Thalis", "Home Food"],
    },
    {
      name: "NIC Ice Creams",
      cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
      areaName: "Puram Society",
      avgRating: "4.5",
      slaString: "25-30 mins",
      cuisines: ["Ice Cream", "Desserts"],
    },
    {
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b81f167b-ccfc-4cc5-98af-571c34e401e6_57686.JPG",
      areaName: "La Gracia Mall",
      avgRating: "3.6",
      slaString: "50-55 mins",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    },
    {
      name: "Wat-a-thali!",
      cloudinaryImageId: "r3kp2a6rbbmemztgyasg",
      areaName: "Panchsheel Square Mall",
      avgRating: "4.2",
      slaString: "45-50 mins",
      cuisines: ["Indian"],
    },
  ];
  return (
    <div className="w-full h-auto flex flex-wrap items-center justify-center">
      {restaurants.map((item, index) => (
        <RestaurantCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Restaurants;
