import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "outline-light";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  secondary:
    "border border-grey-300 bg-white text-ink hover:border-brand-600 hover:text-brand-700",
  light: "bg-white text-brand-800 hover:bg-brand-50",
  "outline-light": "border border-white/60 text-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  variant = "primary",
  icon: Icon,
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {Icon ? <Icon aria-hidden="true" className="size-4 shrink-0" /> : null}
      {children}
    </a>
  );
}