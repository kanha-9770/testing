"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/HomeMachine-cards-carousel";

interface CardData {
  content?: React.ReactNode;
  category: string;
  firstname: string;
  secondname: string;
  description: string;
  image: string;
  title: string;
  speed: number;
  unit: string;
  icon: string;
  items: { className: string; text: string }[];
}

interface HomeMachineCarouselProps {
  filteredCardsData: CardData[];
}

export function HomeMachineCarousel({
  filteredCardsData,
}: HomeMachineCarouselProps) {
  const cards = filteredCardsData.map((card: CardData, index: number) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full -mt-14">
      <Carousel items={cards} />
    </div>
  );
}
