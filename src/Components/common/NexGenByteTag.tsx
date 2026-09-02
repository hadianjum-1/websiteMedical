import { useEffect, useState } from "react";
import { AlertTriangle, Code2, X } from "lucide-react";

const TRIAL_DURATION = 3 * 24 * 60 * 60 * 1000;

// Trial starts: September 2, 2026 at 8:00 PM Pakistan time
const TRIAL_START = new Date("2026-09-02T20:00:00+05:00").getTime();

const NexGenByteTag = () => {
  const [dismissed, setDismissed] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TRIAL_DURATION);

  // Show popup after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTag(true);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  // Countdown timer
  useEffect(() => {
    const updateTimer = () => {
      const remaining =
        TRIAL_START + TRIAL_DURATION - new Date().getTime();

      setTimeLeft(Math.max(remaining, 0));
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Don't show until 5 seconds have passed
  if (!showTag || dismissed) return null;

  const days = Math.floor(
    timeLeft / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (timeLeft / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (timeLeft / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (timeLeft / 1000) % 60
  );

  return (
    <div className="fixed bottom-5 left-5 z-[9999] w-[calc(100%-40px)] max-w-sm">
      <div className="relative overflow-hidden rounded-2xl border border-[#E6E7E9] bg-white shadow-2xl shadow-[#0F3B67]/15">

        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-[#0F3B67] via-[#2563EB] to-[#14B8A6]" />

        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss trial notice"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-[#7B8189] transition hover:bg-[#F8FAFC] hover:text-[#0F3B67]"
        >
          <X size={16} />
        </button>

        <div className="p-4">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F3B67] text-white">
              <Code2 size={16} />
            </div>

            <div>
              <p className="text-xs font-medium text-[#7B8189]">
                Website developed by
              </p>

              <a
                href="https://www.nexgenbyte.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#2563EB] hover:underline"
              >
                NexGenByte
              </a>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-4 flex gap-3 rounded-xl bg-[#FFF7ED] p-3">
            <div className="mt-0.5 shrink-0 text-[#EA580C]">
              <AlertTriangle size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#9A3412]">
                Website Trial Version
              </p>

              <p className="mt-1 text-xs leading-5 text-[#7C2D12]">
                This website is currently running as a trial.
                The trial will expire in 3 days if the website
                plan is not confirmed.
              </p>
            </div>
          </div>

          {/* Timer */}
          <div className="mt-4">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#7B8189]">
              Trial remaining
            </p>

            <div className="grid grid-cols-4 gap-2">
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hours" },
                { value: minutes, label: "Min" },
                { value: seconds, label: "Sec" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg bg-[#F8FAFC] px-2 py-2 text-center"
                >
                  <p className="text-sm font-bold text-[#0F3B67]">
                    {String(item.value).padStart(2, "0")}
                  </p>

                  <p className="mt-0.5 text-[9px] text-[#7B8189]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 border-t border-[#E6E7E9] pt-3">
            <p className="text-[10px] leading-4 text-[#7B8189]">
              Please confirm your website plan before the trial
              period ends to keep the website online.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NexGenByteTag;