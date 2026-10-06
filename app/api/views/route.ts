import { NextResponse } from "next/server";

const NAMESPACE = "saahiyo-portfolio";
const KEY = "visits";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`,
      { cache: "no-store", signal: AbortSignal.timeout(3000) }
    );

    if (!res.ok) {
      return NextResponse.json({ count: null });
    }

    const data = await res.json();
    return NextResponse.json({ count: data.count || null });
  } catch {
    return NextResponse.json({ count: null });
  }
}
