export { MyInterface };

declare global {
  interface StockInformation {
    stock?: string;
    longname?: string;
    prediction?: boolean;
    confidence?: number;
    article_url?: string;
  }
}


