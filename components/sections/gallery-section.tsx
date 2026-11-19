import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/lib/images";

const tiles = [
  {
    title: "Kitchen",
    image: images.gallery.kitchen,
    className: "md:col-span-2 lg:col-span-2",
    ratio: "aspect-[16/10]",
  },
  {
    title: "Bathroom",
    image: images.gallery.bathroom,
    className: "",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Living Room",
    image: images.gallery.livingRoom,
    className: "",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Bedroom",
    image: images.gallery.bedroom,
    className: "",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Interior Details",
    image: images.gallery.interior,
    className: "",
    ratio: "aspect-[4/5]",
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-grey-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="gallery-title"
            eyebrow="Gallery"
            title="A Fresh Look at Beautiful Living Spaces."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile) => (
            <figure key={tile.title} className={tile.className}>
              <Photo
                src={tile.image.src}
                alt={tile.image.alt}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className={`${tile.ratio} rounded-2xl`}
              />
              <figcaption className="mt-3 text-sm font-semibold text-ink">
                {tile.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-sm italic text-grey-500">
          Illustrative photography. Images show example residential interiors and do not
          represent specific company projects.
        </p>
      </div>
    </section>
  );
}