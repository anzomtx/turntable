export interface ImageInfo {
  src: string;
  hint: string;
}

export interface ImageSet {
  title: string;
  images: ImageInfo[];
}

export const imageSets: Record<string, ImageSet> = {
  planter: {
    title: "Planter Build",
    images: [
      { src: "/images/20250822_152217 copy.jpg", hint: "product photography" },
      { src: "/images/20250822_152306 copy.jpg", hint: "product photography" },
      { src: "/images/20250822_152324 copy.jpg", hint: "product photography" },
      { src: "/images/20250822_152342 copy.jpg", hint: "product photography" },
      { src: "/images/20250822_152358 copy.jpg", hint: "product photography" },
      { src: "/images/20250822_152415 copy.jpg", hint: "product photography" },
      { src: "/images/20250822_152442 copy.jpg", hint: "product photography" },
      { src: "/images/20250822_152516 copy.jpg", hint: "product photography" },
    ],
  },
  lamp: {
    title: "Modern Desk Lamp",
    images: [
      { src: "https://picsum.photos/seed/lamp1/800/600", hint: "desk lamp" },
      { src: "https://picsum.photos/seed/lamp2/800/600", hint: "desk lamp" },
      { src: "https://picsum.photos/seed/lamp3/800/600", hint: "desk lamp" },
      { src: "https://picsum.photos/seed/lamp4/800/600", hint: "desk lamp" },
      { src: "https://picsum.photos/seed/lamp5/800/600", hint: "desk lamp" },
      { src: "https://picsum.photos/seed/lamp6/800/600", hint: "desk lamp" },
    ],
  },
};

export const DEFAULT_SET = "planter";
