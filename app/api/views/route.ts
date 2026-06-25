import { NextResponse } from "next/server";

const NAMESPACE = "saahiyo-portfolio";
const KEY = "visits";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json({ count: null }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json({ count: data.count || 0 });
  } catch {
    return NextResponse.json({ count: null }, { status: 502 });
  }
}
