"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const images = [
  { src: "https://placehold.co/1024x768.png", hint: "product photography" },
  { src: "https://placehold.co/1024x768.png", hint: "product photography" },
  { src: "https://placehold.co/1024x768.png", hint: "product photography" },
  { src: "https://placehold.co/1024x768.png", hint: "product photography" },
  { src: "https://placehold.co/1024x768.png", hint: "product photography" },
  { src: "https://placehold.co/1024x768.png", hint: "product photography" },
  { src: "https://placehold.co/1024x768.png", hint: "product photography" },
  { src: "https://placehold.co/1024x768.png", hint: "product photography" },
];

export default function TurntableViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextImage, prevImage]);

  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg shadow-2xl bg-black">
      <div className="w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={`View ${index + 1}`}
            data-ai-hint={image.hint}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index === 0}
            className={cn(
              "object-cover transition-opacity duration-500 ease-in-out",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={prevImage}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-accent/80 text-accent-foreground hover:bg-accent focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextImage}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-accent/80 text-accent-foreground hover:bg-accent focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}
