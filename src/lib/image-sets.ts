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
      { src: "/images/planter/20250822_152217 copy.jpg", hint: "planter 01" },
      { src: "/images/planter/20250822_152306 copy.jpg", hint: "planter 02" },
      { src: "/images/planter/20250822_152324 copy.jpg", hint: "planter 03" },
      { src: "/images/planter/20250822_152342 copy.jpg", hint: "planter 04" },
      { src: "/images/planter/20250822_152358 copy.jpg", hint: "planter 05" },
      { src: "/images/planter/20250822_152415 copy.jpg", hint: "planter 06" },
      { src: "/images/planter/20250822_152442 copy.jpg", hint: "planter 07" },
      { src: "/images/planter/20250822_152516 copy.jpg", hint: "planter 08" },
    ],
  },
  forklift: {
    title: "Forklift Build",
    images: [
      { src: "/images/forklift/20250909_142226.jpg", hint: "forklift 01" },
      { src: "/images/forklift/20250909_142236.jpg", hint: "forklift 02" },
      { src: "/images/forklift/20250909_142253.jpg", hint: "forklift 03" },
      { src: "/images/forklift/20250909_142301.jpg", hint: "forklift 04" },
      { src: "/images/forklift/20250909_142312.jpg", hint: "forklift 05" },
      { src: "/images/forklift/20250909_142320.jpg", hint: "forklift 06" },
      { src: "/images/forklift/20250909_142330.jpg", hint: "forklift 07" },
      { src: "/images/forklift/20250909_142338.jpg", hint: "forklift 08" },
      
    ],
  },
};

export const DEFAULT_SET = "planter";
