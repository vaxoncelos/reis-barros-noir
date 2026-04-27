export type ProductCategory = {
  id: string;
  name: string;
  desc: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "tintas", name: "Tintas", desc: "Interior · exterior · profissional" },
  { id: "maritimas", name: "Tintas Marítimas", desc: "Antivegetativas · cascos · convés" },
  { id: "vernizes", name: "Vernizes", desc: "Madeira · pavimentos · móveis" },
  { id: "esmaltes", name: "Esmaltes", desc: "Metal · madeira · alta resistência" },
  { id: "argamassas", name: "Argamassas", desc: "Colas · rebocos · impermeabilização" },
  { id: "ferramentas", name: "Ferramentas", desc: "Profissionais · acessórios" },
  { id: "iluminacao", name: "Iluminação", desc: "Material elétrico · LED" },
  { id: "epis", name: "EPIs", desc: "Equipamentos de proteção individual" },
];

export type Location = {
  city: string;
  addr: string;
  hours: string;
  phone: string;
};

export const LOCATIONS: Location[] = [
  {
    city: "Funchal",
    addr: "Rua dos Pintores, 24",
    hours: "Seg–Sex 8h–19h · Sáb 9h–13h",
    phone: "+351 291 000 000",
  },
  {
    city: "Câmara de Lobos",
    addr: "Estrada Nacional, 102",
    hours: "Seg–Sex 8h–18h · Sáb 9h–13h",
    phone: "+351 291 000 000",
  },
  {
    city: "Machico",
    addr: "Zona Industrial, Lote 7",
    hours: "Seg–Sex 8h–18h",
    phone: "+351 291 000 000",
  },
];

export type BrandChip = { hex: string; name: string };

export const BRAND_CHIPS: BrandChip[] = [
  { hex: "#016FB6", name: "Azul Pórtico" },
  { hex: "#093E95", name: "Marinho" },
  { hex: "#FFB200", name: "Amarelo" },
  { hex: "#E8E2D2", name: "Cal" },
];

export type NavLink = string;
export const NAV_LINKS: NavLink[] = [
  "Catálogo",
  "Misturador",
  "Obra",
  "Naval",
  "Lojas",
  "Contacto",
];

export type Metric = { value: string; label: string };
export const METRICS: Metric[] = [
  { value: "48", label: "anos" },
  { value: "3", label: "lojas" },
  { value: "240", label: "cores" },
  { value: "24h", label: "obra" },
];

export const TICKER_MESSAGES: string[] = [
  "Misture · encomende · receba em obra",
  "240 cores · misturador automático",
  "Entrega 24h · Madeira",
  "Conta Pro −15% · empreitada",
  "Desde 1978",
];
