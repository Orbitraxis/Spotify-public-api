Spotify Public API (Vercel)
A lightweight Spotify Public API built using Node.js and Next.js API Routes, deployed on Vercel.
This project acts as a wrapper around the Spotify Web API to fetch public Spotify data securely.
🚀 Features
Fetch Spotify public data (albums, artists, etc.)
Serverless API using Vercel
Secure handling of API credentials
Easy to deploy and extend
Clean and minimal codebase
🛠 Tech Stack
Node.js
Next.js (API Routes)
Spotify Web API
Vercel (Serverless Deployment)
⚙️ Setup Environment Variables
Copy the example file:
Copy code
Bash
mv .env.example .env.local
Edit .env.local and add your Spotify credentials:
Copy code
Bash
nano .env.local
Copy code
Env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
📡 Usage
Request albums by query:
Copy code

https://YOUR-VERCEL-DEPLOYMENT.vercel.app/api/spotify?query=summertime%20sadness
Example of API output (short and pretty):
Copy code
Json
[
  {
    "name": "Summertime Sadness",
    "artist": "Lana Del Rey",
    "release_date": "2012-08-01",
    "total_tracks": 10,
    "url": "https://open.spotify.com/album/...",
    "image": "https://i.scdn.co/image/..."
  }
]
🔗 Demo API
You can test it directly in your code:
Spotify API Demo
