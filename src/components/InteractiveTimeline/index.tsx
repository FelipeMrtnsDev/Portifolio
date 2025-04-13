import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface MilestoneItemProps {
  item: Milestone;
  index: number;
  scrollXProgress: MotionValue<number>;
  totalItems: number;
}

const MilestoneItem = ({ item, index, scrollXProgress, totalItems }: MilestoneItemProps) => {
  const opacity = useTransform(scrollXProgress, 
    [(index - 1) / totalItems, index / totalItems, (index) / totalItems],
    [1, 1, 1]
  );
  
  const scale = useTransform(scrollXProgress, 
    [(index - 0.5) / totalItems, index / totalItems, (index + 0.5) / totalItems],
    [0.9, 1.1, 0.9]
  );

  return (
    <motion.div
      className="flex-shrink-0 w-[300px] px-8 snap-center"
      style={{ opacity, scale }}
    >
      <div className={`bg-gradient-to-r ${item.color} p-1 rounded-full w-16 h-16 mx-auto mb-4`}>
        <div className="bg-white dark:bg-gray-900 rounded-full w-full h-full flex items-center justify-center text-2xl">
          {item.icon}
        </div>
      </div>
      <div className="text-center">
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 rounded-full text-sm mb-2">
          {item.year}
        </span>
        <h3 className="text-xl font-bold mb-2 text-orange-600 dark:text-orange-400">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
      </div>
    </motion.div>
  );
};

const InteractiveTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  const milestones: Milestone[] = [
    {
      year: "2023",
      title: "Primeiras Linhas de Código",
      description: "Iniciei meus estudos com HTML/CSS",
      icon: "👨‍💻",
      color: "from-orange-400 to-amber-500"
    },
    {
      year: "2024",
      title: "Entrei pra faculdade de Engenharia de Software",
      description: "Me apaixonei por programação",
      icon: "🎓",
      color: "from-amber-500 to-yellow-500"
    },
    {
      year: "2024",
      title: "Especialização em Desenvolvimento Web",
      description: "Backend e Frontend",
      icon: "🎨",
      color: "from-yellow-500 to-orange-500" 
    },
    {
      year: "2025",
      title: "Trainee",
      description: "Meu primeiro Trabalho como progamador",
      icon: "💼",
      color: "from-orange-500 to-red-500" 
    },
    {
      year: "Hoje",
      title: "Full-stack Developer",
      description: "Me especializando cada vez mais!",
      icon: "🚀",
      color: "from-red-500 to-orange-500" 
    }
  ];

  return (
    <div className="relative h-[400px] mt-20">
      <div className="absolute top-1/2 left-0 right-0 h-1.5">
      </div>
      <div 
        ref={containerRef} 
        className="flex overflow-x-auto pt-4 overflow-y-visible pb-10 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {milestones.map((item, index) => (
          <MilestoneItem 
            key={index}
            item={item}
            index={index}
            scrollXProgress={scrollXProgress}
            totalItems={milestones.length}
          />
        ))}
      </div>
      <div className="absolute mt-8 left-0 right-0 text-center text-sm text-orange-600 dark:text-orange-600 animate-bounce">
        ← Arraste para explorar minha jornada →
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .hide-scrollbar::-webkit-scrollbar-track {
          background: rgba(249, 115, 22, 0.1);
        }
        .hide-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(249, 115, 22, 0.8);
          border-radius: 20px;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(249, 115, 22, 0.8);
        }
      `}</style>
    </div>
  );
};

export default InteractiveTimeline;