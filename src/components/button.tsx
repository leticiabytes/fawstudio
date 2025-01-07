import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
};
export function Button({ children, className, size = "medium" }: Props) {
  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-lg px-8 py-4",
  };

  return (
    <button
      className={twMerge(
        "text-black bg-white rounded-full",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
}
