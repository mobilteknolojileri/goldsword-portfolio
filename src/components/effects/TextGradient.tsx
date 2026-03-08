import { cn } from "@/lib/utils";

interface TextGradientProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const TextGradient = ({ children, className, animate = false }: TextGradientProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent",
        animate && "animate-text-gradient bg-[length:200%_auto]",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default TextGradient;
