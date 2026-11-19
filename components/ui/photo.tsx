"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function Photo({
  src,
  alt,
  sizes,
  priority = false,
  className,
  imageClassName,
}: PhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-grey-100", className)}>
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-grey-500">
          Photo unavailable
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={cn("object-cover", imageClassName)}
        />
      )}
    </div>
  );
}