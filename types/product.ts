export interface SupplyChainHop {
  stage: string;        
  location: string;
  timestamp: string;
  handler: string;
  verified: boolean;
  notes?: string;
}

export interface ProductPassport {
  id: string;
  productName: string;
  brand: string;
  category: string;
  sku: string;
  origin: string;
  manufacturedAt: string;
  description: string;
  materials: string[];
  certifications: string[];
  authentic: boolean;
  supplyChain: SupplyChainHop[];
}