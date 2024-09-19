export type UserDto = {
  id?: string;
  email: string;
  username: string;
  completeName: string;
  role?: RolUser;
  streamSessionId?: string;
  playbackIds: string[];
  password: string;
  createAt?: Date;
  updateAt?: Date;
};

export type RolUser = "STREAMER" | "VIEWER";
