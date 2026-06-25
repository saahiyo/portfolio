import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/saahiyo", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { followers: null, following: null, repos: null },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json({
      followers: data.followers || 0,
      following: data.following || 0,
      repos: data.public_repos || 0,
    });
  } catch {
    return NextResponse.json(
      { followers: null, following: null, repos: null },
      { status: 502 }
    );
  }
}
