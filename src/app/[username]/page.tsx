"use client";

import VideoComponent from "@/components/username/VideoComponent";
import { UserDto } from "@/types/user";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import CommentsComponent from "@/components/username/Comments";
import ResizableSeparator from "@/components/resizable/ResizableComponent";
import socket from "../socket";

function UserStreamer() {
  const params = useParams<{ username: string }>();
  const [userData, setUserData] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isLiveUser, setIsLiveUser] = useState<boolean>(false);
  const [playbackId, setPlaybackId] = useState<string | null>(null);

  const [videoWidth, setVideoWidth] = useState<number>(70); // Porcentaje inicial
  const [commentsWidth, setCommentsWidth] = useState<number>(30); // Porcentaje inicial

  useEffect(() => {
    if (!socket) throw new Error("socket is required!");

    const handleReadyStreamUpdate = async (data: {
      streamSessionId: string;
    }) => {
      const SessionStreamId = data.streamSessionId;

      if (SessionStreamId === userData?.streamSessionId) {
        const response = await axios.post("/api/user/id", {
          username: params.username,
        });
        const userData: UserDto = response.data; // Asegúrate de que `response.data` sea del tipo UserDto
        setUserData(userData);
        setPlaybackId(userData.StreamTv?.[0]?.playbackId || null); // Asegúrate de acceder al primer elemento si existe
        setIsLiveUser(true);
      }
    };

    socket.on("ReadyStreamUpdate", handleReadyStreamUpdate);

    return () => {
      socket?.off("ReadyStreamUpdate", handleReadyStreamUpdate); // Limpieza del efecto
    };
  }, [socket, userData, params.username]);

  useEffect(() => {
    if (!params.username) return;
    setIsLoading(true);

    const getUserDetail = async () => {
      try {
        const response = await axios.post("/api/user/id", {
          username: params.username,
        });

        console.log("Response: ", response);

        if (response.data.success === false) {
          const error = response.data.error;
          throw new Error(error);
        }

        const data: UserDto = response.data.data;
        setUserData(data);
        setIsLoading(false);

        if (
          data.StreamTv &&
          data.StreamTv.length > 0 &&
          data.StreamTv[0].playbackId
        ) {
          setPlaybackId(data.StreamTv[0].playbackId);
          setIsLiveUser(true);
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
        setIsLoading(false);
      }
    };

    getUserDetail();
  }, [params.username]);

  const handleResize = (delta: number) => {
    const newVideoWidth = Math.min(
      100,
      Math.max(0, videoWidth + (delta / window.innerWidth) * 100)
    );
    const newCommentsWidth = 100 - newVideoWidth;

    setVideoWidth(newVideoWidth);
    setCommentsWidth(newCommentsWidth);
  };

  return (
    <main className="flex flex-row h-screen">
      <div
        style={{
          width: isLiveUser ? `${videoWidth}%` : "100%",
          maxWidth: "100%",
          minHeight: "100dvh",
        }}
      >
        <VideoComponent
          isLive={isLiveUser}
          playbackId={playbackId}
          username={params.username}
        />
      </div>

      {isLiveUser && (
        <>
          <ResizableSeparator onResize={handleResize} />
          <div style={{ width: `${commentsWidth}%` }}>
            <CommentsComponent />
          </div>
        </>
      )}
    </main>
  );
}

export default UserStreamer;
