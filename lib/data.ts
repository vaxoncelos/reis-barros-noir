export type ProductCategory = {
  id: string;
  name: string;
  desc: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "tintas", name: "Tintas", desc: "CIN · Robbialac · Nitin · interior e exterior" },
  { id: "maritimas", name: "Tintas Marítimas", desc: "Titan · Veneziani · antivegetativas e cascos" },
  { id: "vernizes", name: "Vernizes", desc: "Madeira · pavimentos · móveis" },
  { id: "esmaltes", name: "Esmaltes", desc: "Metal · madeira · alta resistência" },
  { id: "ferramentas", name: "Ferramentas", desc: "VITO · elétricas · manuais · acessórios" },
  { id: "abrasivos", name: "Abrasivos", desc: "Mirka · lixadoras · aspiração de pó" },
  { id: "construcao", name: "Construção", desc: "Argamassas · rebocos · Powermix" },
  { id: "epis", name: "EPIs & Vestuário", desc: "Sparco · calçado e proteção" },
];

export type Location = {
  city: string;
  addr: string;
  hours: string;
  phone: string;
};

export const LOCATIONS: Location[] = [
  {
    city: "Ribeira Brava",
    addr: "Rua de São Pedro, Loja B · 9350-212",
    hours: "Seg–Sex 8h–13h · Sáb 8h–12h",
    phone: "+351 291 957 604",
  },
];

export type BrandChip = { hex: string; name: string };

export const BRAND_CHIPS: BrandChip[] = [
  { hex: "#016FB6", name: "Azul Pórtico" },
  { hex: "#093E95", name: "Marinho" },
  { hex: "#FFB200", name: "Amarelo" },
  { hex: "#E8E2D2", name: "Cal" },
];

export type Brand = { name: string; focus: string };

export const BRANDS: Brand[] = [
  { name: "CIN", focus: "Tintas arquitetónicas premium · linha Carso" },
  { name: "Robbialac", focus: "Revestimentos e tintas de alta qualidade" },
  { name: "Nitin", focus: "Tintas decorativas e de proteção" },
  { name: "Titan", focus: "Tintas e primários marítimos" },
  { name: "Veneziani", focus: "Iate e embarcações · acabamentos profissionais" },
  { name: "Mirka", focus: "Lixadoras orbitais · DEROS · aspiração DEXOS" },
  { name: "Powermix", focus: "Bombas de mistura e reboco contínuas" },
  { name: "VITO", focus: "Ferramentas elétricas · compressores" },
  { name: "Sparco", focus: "Vestuário e calçado de proteção" },
  { name: "Rust-Oleum", focus: "Sprays especiais · linha Chalked" },
];

export type NavLink = string;
export const NAV_LINKS: NavLink[] = [
  "Catálogo",
  "Misturador",
  "Marcas",
  "Loja",
  "Contacto",
];

export type Metric = { value: string; label: string };
export const METRICS: Metric[] = [
  { value: "1999", label: "desde" },
  { value: "10+", label: "marcas" },
  { value: "4.7★", label: "google" },
  { value: "Madeira", label: "entrega" },
];

export const WHATSAPP = {
  number: "351291957604",
  display: "+351 291 957 604",
  greeting:
    "Olá Reis & Barros, gostaria de pedir informação sobre…",
};

export const TICKER_MESSAGES: string[] = [
  "Tintas · ferramentas · construção",
  "CIN · Robbialac · Nitin · Mirka · Powermix",
  "Tintas marítimas · Titan · Veneziani",
  "Entrega local · Madeira",
  "Desde 1999 · Ribeira Brava",
];
