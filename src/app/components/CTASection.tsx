import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { MagneticButton } from "./ui/MagneticButton";
import { ArrowRight } from "lucide-react";
import { SupportParticleEngine } from "../utils/SupportParticleEngine";

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [engine, setEngine] = useState<SupportParticleEngine | null>(null);
  
  // Flashlight position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to make the flashlight feel fluid
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (!canvasRef.current || engine) return;

    try {
      const newEngine = new SupportParticleEngine(canvasRef.current);
      newEngine.setShape('sk');
      setEngine(newEngine);
    } catch (error) {
      console.warn('WebGL particle background unavailable, falling back to static styling.', error);
      if (canvasRef.current) {
        canvasRef.current.style.display = 'none';
      }
    }

    return () => {
      if (engine) {
        engine.destroy();
      }
    };
  }, [engine]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

 
}
