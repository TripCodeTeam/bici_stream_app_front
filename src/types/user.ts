export type StreamTvDto = {
  id: string;
  streamSessionId: string;
  playbackId: string;
  status: StreamStatus;
  streamKey?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type StreamStatus =
  | "Idle"
  | "Active"
  | "Completed"
  | "Recording"
  | "Disconnected";

export type UserDto = {
  id?: string;
  email: string;
  username: string;
  completeName: string;
  birth: Date;
  role?: RolUser;
  streamSessionId?: string;
  isVerified?: boolean;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  StreamTv?: StreamTvDto[]; // Añadir aquí la relación con StreamTv
};

export type RolUser = "STREAMER" | "VIEWER";
