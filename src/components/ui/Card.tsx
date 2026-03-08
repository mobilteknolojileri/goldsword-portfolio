import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-gray-200 bg-white dark:border-dark-700 dark:bg-dark-800",
          "overflow-hidden shadow-sm",
          hover &&
            "transition-all duration-300 hover:scale-[1.02] hover:border-primary-500 hover:shadow-lg active:scale-95 dark:hover:border-primary-400",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
