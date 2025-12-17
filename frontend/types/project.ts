export type DisplayMode = "default" | "phone" | "laptop";
export type ProjectType = "personal" | "livewall";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  displayMode?: DisplayMode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  heroDisplayMode?: DisplayMode;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string;
  projectType?: ProjectType;
  // Extended details for modal
  fullDescription?: string;
  challenge?: string;
  approach?: string;
  features?: string[];
  gallery?: MediaItem[];
}

