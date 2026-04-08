import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  px?: "none" | "sm" | "md" | "lg";
}

const paddingX = {
  none: "px-0",
  sm: "px-4",
  md: "px-6",
  lg: "px-8",
};

export default function Container({
  children,
  className,
  px = "md", // default
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "w-full max-w-7xl mx-auto",
        paddingX[px],
        className
      )}
    >
      {children}
    </div>
  );
}