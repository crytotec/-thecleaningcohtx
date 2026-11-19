export type SiteImage = {
  src: string;
  alt: string;
};

function unsplash(id: string, width: number, height?: number): string {
  const base = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
  return height ? `${base}&h=${height}` : base;
}

// These photo IDs were written without opening Unsplash. Check each one in the browser.
// They are illustrative residential interiors, not company projects.
export const images = {
  hero: {
    src: unsplash("1600585154340-be6161a56a0c", 2000),
    alt: "Bright, freshly cleaned living room with natural light and tidy furnishings",
  },
  about: {
    src: unsplash("1556909114-f6e7ad7d3136", 1200),
    alt: "Calm, tidy residential kitchen with clean surfaces and natural light",
  },
  services: {
    deepCleaning: {
      src: unsplash("1584622650111-993a426fbf0a", 1400),
      alt: "Spotless bathroom with clean fixtures and fresh towels",
    },
    recurringCleaning: {
      src: unsplash("1507089947368-19c1da9775ae", 1400),
      alt: "Tidy, organised living room with comfortable seating",
    },
    moveCleaning: {
      src: unsplash("1502005097973-6a7082348e28", 1400),
      alt: "Empty, freshly cleaned room with bright natural light",
    },
    airbnbCleaning: {
      src: unsplash("1540518614846-7eded433c457", 1400),
      alt: "Inviting guest bedroom prepared with fresh linens",
    },
  },
  gallery: {
    kitchen: {
      src: unsplash("1600566753190-17f0baa2a6c3", 1600),
      alt: "Bright modern kitchen with clean countertops and polished surfaces",
    },
    bathroom: {
      src: unsplash("1552321554-5fefe8c9ef14", 1200),
      alt: "Spotless white bathroom with fresh towels and polished fixtures",
    },
    livingRoom: {
      src: unsplash("1560185007-cde436f6a4d0", 1200),
      alt: "Fresh, uncluttered living room with soft natural light",
    },
    bedroom: {
      src: unsplash("1522771739844-6a9f6d5f14af", 1200),
      alt: "Organised bedroom with neatly made bed and calm decor",
    },
    interior: {
      src: unsplash("1493809842364-78817add7ffb", 1600),
      alt: "Carefully styled interior with clean lines and natural textures",
    },
  },
} satisfies Record<string, SiteImage | Record<string, SiteImage | Record<string, SiteImage>>>;