import { useEffect } from "react";

export const useReadTracking = (slug: string) => {
  useEffect(() => {
    // Mark the post as read with current timestamp
    const saved = localStorage.getItem("readPosts");
    const readPosts = saved ? JSON.parse(saved) : {};
    
    readPosts[slug] = new Date().toISOString();
    localStorage.setItem("readPosts", JSON.stringify(readPosts));
  }, [slug]);
};

export const getReadTimestamp = (slug: string): string | null => {
  const saved = localStorage.getItem("readPosts");
  if (!saved) return null;
  
  const readPosts = JSON.parse(saved);
  return readPosts[slug] || null;
};
