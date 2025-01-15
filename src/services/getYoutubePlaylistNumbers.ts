const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const GOOGLE_API_KEY = "AIzaSyDyk7Ygdt9waDTMTsurmTexvQ4h7yaZRsM";

export async function getYoutubePlaylistNumbers() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLBcg5lQTyrsRnrdJdLkAOSQLpb_y2164g&key=${GOOGLE_API_KEY}`
  );

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

// https://www.youtube.com/watch?v=FC1jngBKLKI&list=PLBcg5lQTyrsRnrdJdLkAOSQLpb_y2164g&rco=1
