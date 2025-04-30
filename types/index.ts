export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    uploadDate: Date;
    publicId: string;
    originalSize: string;
    compressedSize: string;
    createdAt: Date;
    updatedAt: Date;
    duration: number;
}