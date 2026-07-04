"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ahsti-cookie-consent";

type ConsentChoice = "accepted" | "declined";

export default function CookieNotice() {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (storedValue === "accepted" || storedValue === "declined") {
      setConsent(storedValue);
    }
  }, []);

  const handleConsent = (choice: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(new Event("cookie-consent-changed"));
    setConsent(choice);
  };

  if (consent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200/70 bg-white/90 px-3 py-3 text-slate-700 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-5">
          We use cookies for analytics and site improvement. You can accept or
          decline tracking.
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleConsent("declined")}
            className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:cursor-pointer hover:bg-slate-100"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="rounded-full bg-[#007DC3] px-3 py-1.5 text-sm font-medium text-white transition hover:cursor-pointer hover:bg-[#006aa6]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
