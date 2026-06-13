"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HSStaticMethods } from "preline";

declare global {
  interface Window {
    HSStaticMethods: HSStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import("preline");

      if (window.HSStaticMethods) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    };

    loadPreline();
  }, [path]);

  return null;
}
