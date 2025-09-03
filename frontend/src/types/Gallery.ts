export interface GalleryImage {
    id: number;
    category: 'exterior' | 'lobby' | 'amenities' | 'units';
    title: string;
    description: string;
    imageUrl?: string; // For when we add real images later
}