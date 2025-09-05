"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    // `main.js` defines something like initMainScripts() globally
    if (typeof window !== "undefined" && typeof window.initMainScripts === "function") {
      window.initMainScripts();
    }
  }, [pathname]);

  return null;
}
