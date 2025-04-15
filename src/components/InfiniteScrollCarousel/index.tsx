import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript,
  SiPostgresql, SiDocker, SiJest,
  SiTailwindcss, SiPrisma, SiRedis
} from 'react-icons/si';

const InfiniteScrollCarousel = () => {
  const technologies = [
    { icon: <SiReact size={32} />, name: 'React', color: 'text-blue-500' },
    { icon: <SiNextdotjs size={32} />, name: 'Next.js', color: 'text-black dark:text-white' },
    { icon: <SiNodedotjs size={32} />, name: 'Node.js', color: 'text-green-600' },
    { icon: <SiTypescript size={32} />, name: 'TypeScript', color: 'text-blue-600' },
    { icon: <SiPostgresql size={32} />, name: 'PostgreSQL', color: 'text-blue-700' },
    { icon: <SiDocker size={32} />, name: 'Docker', color: 'text-blue-400' },
    { icon: <SiJest size={32} />, name: 'Jest', color: 'text-red-500' },
    { icon: <SiTailwindcss size={32} />, name: 'Tailwind', color: 'text-cyan-400' },
    { icon: <SiPrisma size={32} />, name: 'Prisma', color: 'text-teal-500' },
    { icon: <SiRedis size={32} />, name: 'Redis', color: 'text-red-700' },
  ];

  const duplicatedItems = [...technologies, ...technologies, ...technologies];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12">
      <motion.div
        ref={containerRef}
        className="flex gap-8 md:gap-12 w-max"
        animate={{
          x: ['0%', `-${100 / 3}%`], // Ajuste preciso para o loop
        }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center justify-center gap-2 min-w-[80px] md:min-w-[120px]"
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.2 }
            }}
          >
            <div className={`${tech.color} text-3xl md:text-4xl`}>
              {tech.icon}
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default InfiniteScrollCarousel;