// Picks the logo for a link from its URL
export type LinkBrand =
  | "github"
  | "pull-request"
  | "npm"
  | "react-native-directory"
  | "google-play"
  | "app-store"
  | "bionluk"
  | "email"
  | "pdf"
  | "demo"
  | "web";

export function linkBrand(href: string): LinkBrand {
  if (href.startsWith("mailto:")) return "email";
  if (/\.pdf(?:$|[?#])/i.test(href)) return "pdf";

  let host: string;
  try {
    host = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "web";
  }

  if (host === "github.com") return /\/pull\/\d+/.test(href) ? "pull-request" : "github";
  if (host.endsWith(".github.io")) return "demo";
  if (host === "npmjs.com") return "npm";
  if (host === "reactnative.directory") return "react-native-directory";
  if (host === "play.google.com") return "google-play";
  if (host === "apps.apple.com") return "app-store";
  if (host === "bionluk.com") return "bionluk";
  return "web";
}
