export interface Video {
  id: string;
  uniqueId: string;
  name: string;
  downloadUrl: string;
  embedUrl: string;
  createdDate: string;
  lastModified: string;
  size: number;
  mimeType: string;
  duration?: number;
  resolution?: string;
}
