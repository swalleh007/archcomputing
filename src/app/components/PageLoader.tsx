import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { BRAND, BRAND_LOGO } from "../brand";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem(BRAND.sessionKey);
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Set visited flag
    sessionStorage.setItem(BRAND.sessionKey, "true");

    // Total duration should not exceed 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111827] text-black"
          initial={{ opacity: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { y: "-100%", opacity: 1 } // Upward wipe
          }
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-3">
              <img
                src={BRAND_LOGO}
                alt={BRAND.name + " logo"}
                className="h-10 md:h-12 object-contain filter invert opacity-90"
              />
              <span style={{ 
                  fontFamily: "'Google Sans Flex', 'Inter', sans-serif", 
                  fontSize: "32px", 
                  letterSpacing: "-0.02em",
                  display: "flex",
                  alignItems: "center"
              }}>
                <span style={{ 
                    fontWeight: 800, 
                    background: "linear-gradient(90deg, #9CA3AF, #A1A1AA)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent" 
                }}>{BRAND.shortName}</span>
                <span style={{ 
                    fontWeight: 400, 
                    color: "#F9FAFB",
                    marginLeft: "0.15em"
                }}>{BRAND.longName}</span>
              </span>
            </div>
            {/* Subtle loading bar */}
            <motion.div 
              className="mt-8 h-[1px] bg-white/20 w-48 overflow-hidden rounded-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
