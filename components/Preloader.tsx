"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--win-desktop)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="win-window"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ width: "min(520px, 90vw)" }}
          >
            <div className="win-titlebar">
              <span>Portfolio — Loading</span>
            </div>

            <div style={{ padding: 40, background: "var(--win-white)", textAlign: "center" }}>
              <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "var(--win-blue)" }}>
                GEINEL NI&#xD1;O DUNGAO
              </h1>
              <p style={{ fontSize: 12, marginBottom: 32, color: "var(--win-gray-dark)" }}>
                Portfolio
              </p>

              {/* Loading bar */}
              <div className="win-inset" style={{ height: 28, padding: 3, marginBottom: 16 }}>
                <motion.div
                  style={{ height: "100%", background: "var(--win-blue)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "linear" }}
                />
              </div>

              <p style={{ fontSize: 11, color: "var(--win-gray-dark)" }}>
                Loading portfolio data...
              </p>
            </div>

            <div className="win-statusbar">
              <div className="win-statusbar-field" style={{ fontSize: 11 }}>Initializing...</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
