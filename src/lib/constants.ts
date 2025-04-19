
export const SITE_NAME = "Green Ravine";
export const SITE_DESCRIPTION = "Уютные домики для отдыха на природе";
export const DISCLAIMER = "* Компания не занимается гостиничными услугами.";

export interface Cabin {
  id: number;
  title: string;
  description: string;
  price: number;
  capacity: string;
  features: string[];
  image: string;
}

export const cabins: Cabin[] = [
  {
    id: 1,
    title: "Лесной домик",
    description: "Уютный домик в окружении соснового леса с видом на озеро",
    price: 5000,
    capacity: "2-4 человека",
    features: ["Камин", "Терраса", "Барбекю"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Домик у реки",
    description: "Просторный домик на берегу реки с частным выходом к воде",
    price: 7500,
    capacity: "4-6 человек",
    features: ["Сауна", "Причал", "Беседка"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Горный шале",
    description: "Стильный домик с панорамными окнами и видом на горные вершины",
    price: 9000,
    capacity: "2-3 человека",
    features: ["Джакузи", "Панорамные окна", "Зона для йоги"],
    image: "/placeholder.svg"
  }
];

export const CONTACTS = {
  phone: "+7 (123) 456-78-90",
  email: "info@greenravine.ru",
  address: "Россия, Московская область, д. Зеленая Долина",
  social: {
    instagram: "https://instagram.com/greenravine",
    telegram: "https://t.me/greenravine",
    whatsapp: "https://wa.me/71234567890"
  }
};
