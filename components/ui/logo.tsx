import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

// Fills the logo's shape with a solid colour, so the logo always shows the brand colour.
const maskStyle = {
  maskImage: "url(/logo.png)",
  WebkitMaskImage: "url(/logo.png)",
  maskSize: "contain",
  WebkitMaskSize: "contain",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskPosition: "center",
} as const;

export function Logo({ tone = "dark", className }: LogoProps) {
  const isLight = tone === "light";

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2 sm:gap-3", className)}>
      <span
        role="img"
        aria-label="The Cleaning Company HTX logo"
        style={maskStyle}
        className={cn(
          "inline-block aspect-[2/1] h-10 shrink-0 sm:h-12 lg:h-16",
          isLight ? "bg-white" : "bg-brand-700",
        )}
      />
      <span
        className={cn(
          "min-w-0 truncate font-extrabold leading-none tracking-tight whitespace-nowrap",
          isLight
            ? "text-base text-white sm:text-lg"
            : "text-sm text-brand-800 sm:text-lg lg:text-2xl",
        )}
      >
        thecleaningcohtx
      </span>
    </span>
  );
}