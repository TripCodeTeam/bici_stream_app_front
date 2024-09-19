import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, username, completeName, role, password } = await req.json();

    const response = await fetch(
      `https://z8mx7lws-3000.use.devtunnels.ms/users/${username}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, completeName, role, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to create user");
    }

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
