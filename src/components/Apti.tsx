import { useEffect, useState } from "react";

const Apti = () => {
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [locked, setLocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);

  const SECRET_PASSCODE = import.meta.env.VITE_REACT_APP_UNLOCK_PASSCODE;

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return null;
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  };

  // Load saved state
  useEffect(() => {
    const savedCount = parseInt(getCookie("tabSwitchCount") || "0", 10);
    setTabSwitchCount(savedCount);

    if (savedCount >= 2 || getCookie("locked") === "true") {
      setLocked(true);
    }
  }, []);

  // Common violation handler
  const handleViolation = () => {
    setTabSwitchCount((prev) => {
      const newCount = prev + 1;
      setCookie("tabSwitchCount", newCount.toString(), 1);

      if (newCount >= 2) {
        setLocked(true);
        setCookie("locked", "true", 1);
      } else {
        setShowPopup(true);
      }
      return newCount;
    });
  };

  // Detect tab switching + fullscreen exit
  useEffect(() => {
    if (!started) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleViolation();
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        handleViolation();
      }
    };

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleViolation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [started]);

  // Disable copy, inspect, context menu
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // Disable Ctrl+U, Ctrl+C, Ctrl+S
    if (
      e.ctrlKey &&
      (e.key === "u" || e.key === "U" || e.key === "c" || e.key === "C" || e.key === "s" || e.key === "S")
    ) {
      e.preventDefault();
    }

    // Disable Refresh (F5, Ctrl+R)
    if (e.key === "F5" || (e.ctrlKey && (e.key === "r" || e.key === "R"))) {
      e.preventDefault();
    }

    // Disable DevTools (Ctrl+Shift+I / J / C, F12)
    if (
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
      e.key === "F12"
    ) {
      e.preventDefault();
    }
  };

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    // Prevent refresh / closing tab directly
    e.preventDefault();
    e.returnValue = ""; // Chrome requires returnValue to be set
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, []);


  useEffect(() => {
    document.body.style.userSelect = "none";
    return () => {
      document.body.style.userSelect = "auto";
    };
  }, []);

  const requestFullscreen = async () => {
    if (document.documentElement.requestFullscreen) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {
        console.error("Fullscreen request failed:", err);
      }
    }
  };

  const handleUnlock = async () => {
    if (passcode === SECRET_PASSCODE) {
      setLocked(false);
      setTabSwitchCount(0);
      setPasscode("");
      setError("");

      setCookie("tabSwitchCount", "0", 1);
      setCookie("locked", "false", 1);

      await requestFullscreen();
    } else {
      setError("❌ Incorrect passcode. Try again.");
    }
  };

  const startTest = async () => {
    setStarted(true);
    await requestFullscreen();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      {!started ? (
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-4">Aptitude Test</h1>
          <p className="mb-4 text-gray-600 text-center">
            The test will start in <b>Fullscreen Mode</b>. <br />
            Do not switch tabs, exit fullscreen, or press ESC — otherwise the test will be locked.
          </p>
          <button
            onClick={startTest}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Start Test
          </button>
        </div>
      ) : locked ? (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-red-600 mb-3">🔒 Test Locked</h2>
          <p className="text-gray-700 mb-4">
            You triggered violations <b>{tabSwitchCount}</b> times. Enter the passcode to continue.
          </p>

          <input
            type="password"
            placeholder="Enter passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full mb-3 text-black"
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button
            onClick={handleUnlock}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Unlock
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-3 text-gray-800">Aptitude Test</h1>
          <iframe
            src="https://forms.office.com/r/J1FR7b0spJ"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-xl shadow-lg w-full max-w-3xl"
          >
            Loading…
          </iframe>
        </>
      )}

      {/* Warning Popup */}
      {showPopup && !locked && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-3">⚠️ Warning</h2>
            <p className="text-gray-700 mb-5">
              You triggered violations <b>{tabSwitchCount}</b> times. After 2 times, the test will be locked.
            </p>
            <button
              onClick={async () => {setShowPopup(false); await requestFullscreen();}}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Okay, Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apti;
