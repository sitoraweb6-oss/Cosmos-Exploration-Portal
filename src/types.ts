export type ActiveTab = "home" | "missions" | "gallery" | "about" | "contact";

export interface Mission {
  id: string;
  code: string;
  title: string;
  destination: string;
  status: "active" | "completed" | "scheduled";
  date: string;
  description: string;
  crewSize: number;
  hazards: string[];
  metrics: { label: string; value: string }[];
}

export interface EpochMilestone {
  era: string;
  year: string;
  title: string;
  description: string;
  coordinates: string;
  authority: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "planet" | "station" | "phenomenon" | "vessel";
  imageUrl: string;
  description: string;
  system: string;
}

export interface SignalLog {
  origin: string;
  year: string;
  status: "info" | "warning" | "critical" | "anomalous";
  payload: string;
  recommends: string;
  datasource: "gemini" | "offline_fallback";
}
