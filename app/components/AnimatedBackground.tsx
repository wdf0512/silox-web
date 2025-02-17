"use client";

import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

interface OrbConfig {
  id: number;
  size: number;
  color: string;
  initialX: string;
  initialY: string;
}

const generateRandomOrb = (id: number): OrbConfig => {
  const colors = ["rgba(255, 100, 100, 0.6)", "rgba(255, 180, 80, 0.6)", "rgba(100, 100, 255, 0.6)", "rgba(80, 200, 120, 0.6)"];
  return {
    id,
    size: Math.random() * 280 + 150, // 150 - 350 px
    color: colors[Math.floor(Math.random() * colors.length)], // 随机颜色
    initialX: `${Math.random() * 80}%`,
    initialY: `${Math.random() * 100}%`,
  };
};

export default function AnimatedBackground() {
  const [orbs, setOrbs] = useState<OrbConfig[]>([]);

  // 初始生成 5 个光球
  useEffect(() => {
    setOrbs(Array.from({ length: 6 }, (_, i) => generateRandomOrb(i)));
  }, []);

  // 监听滚动，增加更多光球
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > orbs.length * 200) {
        setOrbs((prev) => [...prev, generateRandomOrb(prev.length)]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [orbs]);

  return (
    <div className="background">
      {orbs.map((orb) => (
        <AnimatedOrb key={orb.id} orb={orb} />
      ))}
    </div>
  );
}

// **单独的 AnimatedOrb 组件**
const AnimatedOrb = ({ orb }: { orb: OrbConfig }) => {
  // **控制球体浮动**
  const floating = useSpring({
    from: { transform: "translate(0px, 0px)" },
    to: [
      { transform: "translate(20px, -10px)" },
      { transform: "translate(-15px, 20px)" },
      { transform: "translate(10px, -15px)" },
      { transform: "translate(0px, 0px)" },
    ],
    config: { duration: 2000 },
    loop: true,
  });

  // **控制光球呼吸感**
  const glowing = useSpring({
    from: { opacity: 0.9, transform: "scale(1)" },
    to: [
      { opacity: 0.8, transform: "scale(1.7)" },
      { opacity: 0.9, transform: "scale(1.6)" },
    ],
    config: { duration: 3000 },
    loop: true,
  });

  return (
    <animated.div
      style={{
        ...floating,
        ...glowing,
        width: orb.size,
        height: orb.size,
        left: orb.initialX,
        top: orb.initialY,
        background: `radial-gradient(circle, ${orb.color} 0%, rgba(255,255,255,0) 70%)`,
      }}
      className="glowing-ball"
    />
  );
};