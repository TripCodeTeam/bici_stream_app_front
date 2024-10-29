"use client";

import socket from "@/app/socket";
import {
  InLiveGlobalProvider,
  useInLiveContext,
} from "@/context/InLiveGlobalState";
import React, { useEffect, useState } from "react";

interface Comment {
  id: string; // o number, dependiendo de cómo estés identificando los comentarios
  text: string;
  timeline: number; // o Date, si prefieres manejarlo como fecha
}

function Comment() {
  const [comments, setComments] = useState<Comment[]>([]);

  const [comment, setComment] = useState("");

  const { isLive, toggleLiveState } = useInLiveContext();

  useEffect(() => {
    if (!socket) return;

    socket.on("connected", (data) => {
      console.log("Stream Connected", data.streamDetails);
    });

    socket.on("newComment", (data) => {
      setComments((prev) => [...prev, data]);
    });

    return () => {
      socket?.off("newComment");
    };
  }, []);

  const handleSendComment = () => {
    if (!socket) return;

    socket.emit("comment", {
      streamSessionId: "your-stream-session-id",
      comment,
      timeline: Date.now(),
    });
    setComment("");
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        {comments.map((c) => (
          <div key={c.id}>
            <p>{c.text}</p>
            <span>{new Date(c.timeline).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handleSendComment}>Send</button>
    </div>
  );
}

export default Comment;
