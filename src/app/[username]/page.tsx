import { UserDto } from "@/types/user";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function UserStreamer() {
  const params = useParams<{ username: string }>();
  const [userData, setUserData] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!params.username) return;
    setIsLoading(true);

    const getUserDetail = async () => {
      try {
        const response = await axios.post("/api/user/id", {
          username: params.username,
        });

        if (response.data.success == false) {
          const error = response.data.error;
          throw new Error(error);
        }

        const data: UserDto = response.data.data;
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    };

    getUserDetail();
  }, []);

  return <div></div>;
}

export default UserStreamer;
