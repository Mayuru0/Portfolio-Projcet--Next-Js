type LoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

export default function cloudinaryLoader({ src, width, quality }: LoaderParams): string {
  // If src is already a full Cloudinary URL, extract the path after /upload/
  const uploadIndex = src.indexOf("/upload/");
  if (uploadIndex !== -1) {
    const base = src.slice(0, uploadIndex + "/upload/".length);
    const path = src.slice(uploadIndex + "/upload/".length);
    return `${base}w_${width},q_${quality ?? 75},f_auto/${path}`;
  }
  return src;
}
