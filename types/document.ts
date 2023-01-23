export type DocumentType = {
  header: DocumentHeader;
  slug: string; // URL slug for the document, generated from its path
  content: string; // HTML content, parsed from markdown
};

export type DocumentHeader = {
  title: string; // title of the document
  desc: string; // short plaintext description of this document
  order: number; // order of this document within the category
  cat: string; // category of this document
};

export type DocumentsCategorized = {
  [category: string]: [
    DocumentHeader, // header
    string // slug
  ][];
};
