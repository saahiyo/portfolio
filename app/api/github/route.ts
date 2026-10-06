import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/saahiyo", {
      headers: {
        "User-Agent": "saahiyo-portfolio",
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(4000),
    });

    if (!res.ok) {
      return NextResponse.json({ followers: null, following: null, repos: null });
    }

    const data = await res.json();
    return NextResponse.json({
      followers: data.followers ?? null,
      following: data.following ?? null,
      repos: data.public_repos ?? null,
    });
  } catch {
    return NextResponse.json({ followers: null, following: null, repos: null });
  }
}
