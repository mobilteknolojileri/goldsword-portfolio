import { HTMLAttributes, forwardRef } from "react";
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
          "rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700",
          "shadow-sm overflow-hidden",
          hover &&
            "transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary-500 dark:hover:border-primary-400",
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
