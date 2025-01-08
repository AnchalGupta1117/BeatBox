import React from "react";
import Header from "../components/Header";
import AlbumCard from "../components/AlbumCard";
import Tabs from "../components/Tabs";
import HorizontalScrollList from "../components/HorizontalScrollList";
import SongTile from "../components/SongTile";
import ArtistTile from "../components/ArtistTile";
import Navbar from "../components/Navbar";

const Home = () => {
  const dummySongs = [
    {
      image: "https://via.placeholder.com/80",
      title: "Pookkal",
      artist: "G.V Prakash",
    },
    {
      image: "https://via.placeholder.com/80",
      title: "Poo Nee Poo",
      artist: "Anirudh",
    },
    {
      image: "https://via.placeholder.com/80",
      title: "Ava Enna",
      artist: "Harris Jayaraj",
    },
  ];

  const dummyArtists = [
    { image: "https://via.placeholder.com/80", name: "A.R. Rahman" },
    { image: "https://via.placeholder.com/80", name: "Anirudh" },
    { image: "https://via.placeholder.com/80", name: "Hiphop Tamizha" },
  ];

  return (
    <div className="bg-black w-screen min-h-screen text-white">
      <Header />
      <div className="px-4">
        <AlbumCard />
      </div>
      <Tabs />
      <HorizontalScrollList title="Recently Played">
        {dummySongs.map((song, index) => (
          <SongTile key={index} {...song} />
        ))}
      </HorizontalScrollList>
      <HorizontalScrollList title="Artists">
        {dummyArtists.map((artist, index) => (
          <ArtistTile key={index} {...artist} />
        ))}
      </HorizontalScrollList>
      <HorizontalScrollList title="Recommended for Today">
        {dummySongs.map((song, index) => (
          <SongTile key={index} {...song} />
        ))}
      </HorizontalScrollList>
      <Navbar />
    </div>
  );
};

export default Home;