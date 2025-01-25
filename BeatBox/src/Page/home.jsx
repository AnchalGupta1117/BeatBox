import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/userProvider';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import Tabs from '../components/Tabs';
import HorizontalScrollList from '../components/HorizontalScrollList';
import SongTile from '../components/SongTile';
import ArtistTile from '../components/ArtistTile';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { TopArtists } from '../../utils/topplaylists';

const Home = () => {
  const navigate = useNavigate();
  const { user, loading } = useUserContext();
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const backendURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (!loading && !user.email) {
      navigate('/login');
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      try {
        const response = await axios.get(`${backendURL}/recent`, {
          withCredentials: true,
        });
        console.log(response.data);
        const songIds = response.data.recentlyPlayed.join(',');
        console.log(songIds);
        const songsResponse = await axios.get(
          `https://saavn.dev/api/songs?ids=${songIds}`
        );
        setRecentlyPlayed(songsResponse.data.data);
      } catch (error) {
        console.error('Error fetching recentlyPlayed songs:', error);
      }
    };

    if (!loading && user.email) {
      fetchRecentlyPlayed();
    }
  }, [loading, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-backgroundColor w-screen min-h-screen text-white">
      <Header />
      <div className="px-4">
        <AlbumCard />
      </div>
      {/* <Tabs /> */}
      <HorizontalScrollList title="Recently Played">
        {recentlyPlayed.map((song) => (
          <SongTile
            key={song.id}
            image={song.image[2]?.url}
            title={song.name}
            artist={song.artists.primary[0]?.name}
          />
        ))}
      </HorizontalScrollList>
      <HorizontalScrollList title="Artists">
        {TopArtists.map((artist, index) => (
          <ArtistTile key={index} {...artist} />
        ))}
      </HorizontalScrollList>
      <HorizontalScrollList title="Recommended for Today">
        {recentlyPlayed.map((song) => (
          <SongTile
            key={song.id}
            image={song.image[2]?.url}
            title={song.name}
            artist={song.artists.primary[0]?.name}
          />
        ))}
      </HorizontalScrollList>
      <Navbar />
    </div>
  );
};

export default Home;