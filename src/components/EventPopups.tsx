"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const fiveKUrl = "https://runsignup.com/Race/TX/Mcallen/CosmicGlow5KRunWalk";
const flyerUrl = "/files/popups/AHSTI-McAllen-Mondays.png";
const flyerDismissedKey = "ahsti-homeownership-event-flyer-dismissed";

export default function EventPopups() {
  const [showFlyer, setShowFlyer] = useState(false);
  const [showFiveK, setShowFiveK] = useState(true);

  useEffect(() => {
    setShowFlyer(window.sessionStorage.getItem(flyerDismissedKey) !== "true");
  }, []);

  function closeFlyer() {
    window.sessionStorage.setItem(flyerDismissedKey, "true");
    setShowFlyer(false);
  }

  return (
    <>
      {showFiveK && (
        <aside className="fixed bottom-4 right-4 z-40 w-[min(330px,calc(100vw-2rem))] rounded-lg border-2 border-[#E7212B] bg-white p-4 shadow-2xl">
          <button
            type="button"
            onClick={() => setShowFiveK(false)}
            aria-label="Close Cosmic Glow 5K announcement"
            className="absolute right-2 top-2 rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer"
          >
            <X size={18} />
          </button>
          <p className="pr-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#E7212B]">Now live</p>
          <h2 className="mt-1 pr-5 text-xl font-bold text-[#00345B]">Cosmic Glow 5K Run/Walk</h2>
          <p className="mt-1 text-sm text-slate-700">Registration is open for AHSTI&apos;s 5K run and walk.</p>
          <a
            href={fiveKUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-md bg-[#007DC3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#005f96]"
          >
            Register now
          </a>
        </aside>
      )}

      {showFlyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="homeownership-event-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeFlyer();
          }}
        >
          <div className="relative max-h-[calc(100vh-2rem)] w-full max-w-[720px] overflow-auto rounded-lg bg-white shadow-2xl">
            <h2 id="homeownership-event-title" className="sr-only">Homeownership Event flyer</h2>
            <button
              type="button"
              onClick={closeFlyer}
              aria-label="Close Homeownership Event flyer"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 text-slate-700 shadow-md hover:bg-white hover:cursor-pointer"
            >
              <X size={22} />
            </button>
            <Image
              src={flyerUrl}
              alt="Homeownership Event flyer with event dates, locations, and free credit pulls"
              width={1080}
              height={1350}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}