import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { cabins } from "@/lib/constants";

const photoCategories = [
  { id: "all", name: "Все фото" },
  { id: "exterior", name: "Экстерьер" },
  { id: "interior", name: "Интерьер" },
  { id: "nature", name: "Природа" }
];

// Заглушки для фотографий
const photos = [
  {
    id: 1,
    src: "/placeholder.svg",
    alt: "Экстерьер домика у озера",
    category: "exterior",
    cabinId: 1
  },
  {
    id: 2,
    src: "/placeholder.svg",
    alt: "Внутренний интерьер спальни",
    category: "interior",
    cabinId: 1
  },
  {
    id: 3,
    src: "/placeholder.svg",
    alt: "Вид на лес из окна",
    category: "nature",
    cabinId: 1
  },
  {
    id: 4,
    src: "/placeholder.svg",
    alt: "Домик в зимнее время",
    category: "exterior",
    cabinId: 2
  },
  {
    id: 5,
    src: "/placeholder.svg",
    alt: "Гостиная с камином",
    category: "interior",
    cabinId: 2
  },
  {
    id: 6,
    src: "/placeholder.svg",
    alt: "Река возле домика",
    category: "nature",
    cabinId: 2
  },
  {
    id: 7,
    src: "/placeholder.svg",
    alt: "Терраса домика",
    category: "exterior",
    cabinId: 3
  },
  {
    id: 8,
    src: "/placeholder.svg",
    alt: "Кухонная зона",
    category: "interior",
    cabinId: 3
  },
  {
    id: 9,
    src: "/placeholder.svg",
    alt: "Закат над озером",
    category: "nature",
    cabinId: 3
  }
];

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 bg-greenRavine-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-greenRavine-800 mb-2">Фотогалерея</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Посмотрите фотографии наших домиков и живописной природы вокруг
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {photoCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-greenRavine-600 text-white"
                  : "bg-greenRavine-100 text-greenRavine-800 hover:bg-greenRavine-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map(photo => {
            const relatedCabin = cabins.find(cabin => cabin.id === photo.cabinId);
            
            return (
              <Dialog key={photo.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm">{photo.alt}</p>
                        {relatedCabin && (
                          <p className="text-greenRavine-100 text-xs">{relatedCabin.title}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium">{photo.alt}</h3>
                    {relatedCabin && (
                      <p className="text-sm text-muted-foreground">{relatedCabin.title}</p>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;