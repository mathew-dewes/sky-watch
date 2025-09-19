"use client";

import { revalidatePosts } from "@/server/mutations/post";
import { useState } from "react";


export default function RevalidateButton({ community }: { community?: string }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRevalidate = async () => {
    setLoading(true);
    await revalidatePosts(community);
    setLoading(false);
    setMessage("Cache revalidated!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div>
      <button
        onClick={handleRevalidate}
        className="px-4 my-5 py-2 bg-blue-500 text-white rounded"
        disabled={loading}
      >
        {loading ? "Revalidating..." : "Revalidate Cache"}
      </button>
      {message && <p className="mt-2 text-green-500">{message}</p>}
    </div>
  );
}
