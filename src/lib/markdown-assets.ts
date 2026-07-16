/** Taille max pour intégrer une image en data URL dans le markdown (localStorage). */
export const MARKDOWN_IMAGE_MAX_BYTES = 1_500_000;

const IMAGE_MIME_PREFIX = "image/";

export function isImageFile(file: File): boolean {
  if (file.type.startsWith(IMAGE_MIME_PREFIX)) return true;
  return /\.(png|jpe?g|gif|webp|svg)$/i.test(file.name);
}

export async function fileToDataUrl(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function svgToDataUrl(svg: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function buildImageMarkdown(alt: string, url: string): string {
  const safeAlt = alt.replace(/[\[\]]/g, "");
  return `![${safeAlt}](${url})`;
}

export {
  buildAlignedImageBlock,
  collapseImageBlocksForEditor,
  expandImageBlocksFromEditor,
  nextEmbeddedImageLabel,
  type MarkdownImageAlign,
} from "./markdown-image-blocks";
