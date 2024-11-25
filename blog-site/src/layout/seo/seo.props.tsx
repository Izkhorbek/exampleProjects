import { ReactNode } from "react";

export interface ISEOProps {
  children: ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  author?: string;
}
