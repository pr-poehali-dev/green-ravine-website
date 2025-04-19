import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const PhotoGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    { src: "/placeholder.svg", alt: "Домик снаружи" },
    { src: "/placeholder.svg", alt: "Интерьер домика" },
    { src: "/placeholder.svg", alt: "Терраса" },
    { src: "/placeholder.svg", alt: "Вид из окна" },
    { src: "/placeholder.svg", alt: "Территория" },
    { src: "/placeholder.svg", alt: "Зона отдыха" }
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setOpen(true);
  };

  return (
    <section id="gallery" className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-greenRavine-800 mb-2">Фотогалерея</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Взгляните на наши уютные домики, их интерьеры и окружающую природу
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-video overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
            <img 
              src={selectedImage} 
              alt="Увеличенное фото" 
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;