import { cn } from "@/lib/utils";

interface TextGradientProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const TextGradient = ({
  children,
  className,
  animate = false,
}: TextGradientProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent",
        animate && "animate-text-gradient bg-[length:200%_auto]",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default TextGradient;
