export interface Service {
  id: string;
  title: string;
  description: string;
  images: string[];
  aspectRatio?: string;
}

export interface Category {
  id: string;
  title: string;
  services: Service[];
}
