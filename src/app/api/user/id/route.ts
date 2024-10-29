import { UserDto } from "@/types/user";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username } = await req.json();

    const response = await axios.get(
      `https://z8mx7lws-3000.use.devtunnels.ms/users/${username}`,
      {}
    );

    console.log(response);

    const data: UserDto = response.data;

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      ); // Return an error status
    }
  }
}
