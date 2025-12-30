export default async function handler(req, res) {
  const query = req.query.query || req.query.album;

  if (!query) {
    return res.status(400).json({ error: "Missing ?query parameter" });
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  try {
    // Get access token
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    const tokenData = await tokenResponse.json();
    const access_token = tokenData.access_token;

    // Search albums
    const searchResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const searchData = await searchResponse.json();

    // Short and pretty output
    const albums = (searchData.albums?.items || []).map(album => ({
      name: album.name,
      artist: album.artists.map(a => a.name).join(", "),
      release_date: album.release_date,
      total_tracks: album.total_tracks,
      url: album.external_urls.spotify,
      image: album.images[0]?.url || null,
    }));

    return res.status(200).json(albums);
  } catch (error) {
    return res.status(500).json({
      error: "Spotify API error",
      details: error.message,
    });
  }
}
