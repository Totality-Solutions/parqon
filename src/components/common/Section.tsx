import React from "react";
import clsx from "clsx";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  variant?: "default" | "light" | "dark";
}


const variants = {
  default: "bg-white",
  dark: "bg-black text-white",
  light: "bg-gray-100",
};


export default function Section({
  children,
  className,
  containerClassName,
  id,
  variant = "default", // ✅ default value
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-12 sm:py-16 lg:py-20",
        variants[variant], // ✅ apply variant
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}