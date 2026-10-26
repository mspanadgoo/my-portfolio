export const SITE_URL = "https://www.mspanadgoo.ir";
export const SITE_HOST = "www.mspanadgoo.ir";
export const SITE_LAST_MODIFIED = "2026-10-26";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}
