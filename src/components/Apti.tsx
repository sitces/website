import { useEffect, useState } from "react";

const Apti = () => {
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [locked, setLocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(""); // countdown display
  const [tooEarly, setTooEarly] = useState(false); // block before start time

  const SECRET_PASSCODE = import.meta.env.VITE_REACT_APP_UNLOCK_PASSCODE;

  // Time window
  const startTime = new Date();
  startTime.setHours(16,30, 0, 0); // 4:15 PM
  const endTime = new Date(startTime.getTime() + 70 * 60000); // +70 mins = 5:25 PM

  // Timer + auto lock
  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      const now = new Date();

      if (now < startTime) {
        setTooEarly(true);
        setStarted(false);
        clearInterval(interval);
      } else if (now > endTime) {
        setLocked(true);
        clearInterval(interval);
      } else {
        setTooEarly(false);
        const diff = endTime.getTime() - now.getTime();
        const mins = Math.floor(diff / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${mins}m ${secs}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [started]);

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
      if (document.hidden) handleViolation();
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) handleViolation();
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
      if (
        e.ctrlKey &&
        (e.key === "u" || e.key === "U" || e.key === "c" || e.key === "C" || e.key === "s" || e.key === "S")
      ) {
        e.preventDefault();
      }
      if (e.key === "F5" || (e.ctrlKey && (e.key === "r" || e.key === "R"))) {
        e.preventDefault();
      }
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
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
    const now = new Date();
    if (now < startTime) {
      setTooEarly(true);
      return;
    }
    if (now > endTime) {
      setLocked(true);
      return;
    }
    setStarted(true);
    await requestFullscreen();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      {!started ? (
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <img src="/ces-logo-main.png" alt="CES Logo" className="w-12 h-12 object-contain" />
            <h2 className="text-2xl font-semibold text-blue-700">Campus 2 Corporate</h2>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Aptitude Test</h1>
          {tooEarly ? (
            <p className="text-red-600 mb-4 text-center">⏳ The test will start at 4:30 PM. Please wait.</p>
          ) : (
            <p className="mb-4 text-gray-600 text-center leading-relaxed">
              The test will start in <b>Fullscreen Mode</b>. <br />
              Do not switch tabs, exit fullscreen, or press ESC — otherwise the test will be locked.
            </p>
          )}
          <div className="bg-blue-50 p-4 rounded-lg w-full text-center mb-4">
            <p className="text-gray-700 font-medium">📅 Start Date: <span className="font-semibold">20/08/2025</span></p>
            <p className="text-gray-700 font-medium">⏰ Start Time: <span className="font-semibold">4:30 PM</span></p>
            <p className="text-gray-700 font-medium">⏰ End Time: <span className="font-semibold">5:40 PM</span></p>
          </div>
          <button
            onClick={startTest}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full font-medium"
          >
            Start Test
          </button>
          <p className="mt-6 text-sm text-gray-400">Made with ❤️ by CES</p>
        </div>
      ) : locked ? (
<div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
  <h2 className="text-2xl font-semibold text-red-600 mb-3">🔒 Test Locked</h2>

  <p className="text-gray-700 mb-4">
    {new Date() > endTime
      ? "⏰ The test has ended. Enter the passcode to unlock (admin override)."
      : `You triggered violations ${tabSwitchCount} times. Enter the passcode to continue.`}
  </p>

  {/* Password input shown always */}
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
          <p className="mb-2 text-gray-600">⏳ Time Left: <b>{timeLeft}</b></p>
          <iframe
            width="640px"
            height="480px"
            src="https://forms.office.com/r/aG1GnUm90r"
            className="w-full max-w-3xl h-[80vh] rounded-xl shadow-lg border border-gray-200"
            allowFullScreen
          ></iframe>
        </>
      )}
      {showPopup && !locked && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-3">⚠️ Warning</h2>
            <p className="text-gray-700 mb-5">
              You triggered violations <b>{tabSwitchCount}</b> times. After 2 times, the test will be locked.
            </p>
            <button
              onClick={async () => { setShowPopup(false); await requestFullscreen(); }}
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
