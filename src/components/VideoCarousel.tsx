"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface VideoCarouselProps {
  videos: Video[];
  onVideoSelect: (videoId: string) => void;
}

export function VideoCarousel({ videos, onVideoSelect }: VideoCarouselProps) {
  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <CarouselContent>
        {videos.map((video) => (
          <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card
                className="cursor-pointer hover:scale-105 transition-transform border-0 shadow-none bg-black text-white"
                onClick={() => onVideoSelect(video.id)}
              >
                <CardContent className="flex flex-col items-center p-4">
                  <div className="relative w-full aspect-video bg-gray-200">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                        <Image
                          src="/icons/video-play.svg"
                          alt="Play"
                          width={30}
                          height={30}
                        />
                      </div>
                    </div>
                  </div>
                  <h1 className="mt-3 text-center line-clamp-2 font-montserrat text-2xl font-medium text-white">
                    {video.title}
                  </h1>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
