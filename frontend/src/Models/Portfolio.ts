export interface IPortfolioGet {
  id: number;
  symbol: string;
  companyName: string;
  purchase: number;
  lastDiv: number;
  industry: number;
  marketCap: number;
  comments: any;
}

export interface IPortfolioPost {
  symbol: string;
}
