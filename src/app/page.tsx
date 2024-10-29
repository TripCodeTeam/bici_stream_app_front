"use client";

import {
  InLiveGlobalProvider,
  useInLiveContext,
} from "@/context/InLiveGlobalState";
import Image from "next/image";
import { useState } from "react";
import liveStreams from "@/components/Jsons/StreamTest.json";

export default function Home() {
  const { toggleLiveState, isLive } = useInLiveContext();
  const [currentStream, setCurrentStream] = useState<string | null>(null);

  // Función para manejar el click en un stream
  const handleStreamClick = (username: string) => {
    setCurrentStream(username);
    toggleLiveState(); // Cambia el estado a "live"
    window.location.href = `/${username}`;
  };

  console.log(isLive);

  return (
    <div>
      <h1>Live Streams</h1>
      <div className="stream-grid">
        {liveStreams.map((stream) => (
          <div
            key={stream.id}
            className="stream-card"
            onClick={() => handleStreamClick(stream.streamer)}
          >
            <Image
              src={stream.thumbnail}
              alt={stream.title}
              width={300}
              height={200}
            />
            <div className="stream-info">
              <h2>{stream.title}</h2>
              <p>Streamer: {stream.streamer}</p>
              <p>Viewers: {stream.viewers}</p>
              {currentStream == stream.streamer && <p>Currently Watching</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
