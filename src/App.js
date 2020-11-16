import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';

// creating an object of SpotifyWebApi class
const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
    function fetchBusiness() {
      //to get token from the url
      const hash = getTokenFromUrl();

      //done for security purpose so that user doesnt see the token passed
      window.location.hash = "";

      const _token = hash.access_token;

      if (_token) {
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        })
        //we store it in the state
        //setToken(_token);
        //giving access token to Spotify 
        spotify.setAccessToken(_token);
        spotify.getMe().then((user) => {
          //console.log("user is: ", user);
          dispatch({
            type: 'SET_USER',
            user: user,
          });
        });
        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          })
        })
      }
      //console.log("TOKEN:", token);
    }
    fetchBusiness();
  }, []);
  //2nd param [name, other_var, ...] useEffect function will run
  // when name, other_var.. variables value change
  //console.log("user is: ", user);
  //console.log("token is: ", token);
  return (
    <div className="app">
      {
        token ? (<Player />) : <Login />
      }
    </div>
  );
}
export default App;

// Client ID b13a8b7bd5a745579d626087763a2281
// Issue 1:missing dependency warning when using useEffect React Hook -> FIXED
/*function fetchBusiness() {
      const hash = getTokenFromUrl();
      window.location.hash = "";

      const _token = hash.access_token;

      if (_token) {
        //we store it in the state
        setToken(_token);
        //giving access token to Spotify
        spotify.setAccessToken(_token);
        spotify.getMe().then((user) => {
          //console.log("user is: ", user);
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        })
      }
      console.log("user is: ", user);
      console.log("TOKEN:", token);
    }
    fetchBusiness();
  }
  used wrapper function to fetchBusiness insed useEffect hook
   */