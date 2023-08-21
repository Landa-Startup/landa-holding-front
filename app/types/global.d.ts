interface BusinessPartnerShipFormData {
  fullName: string;
  email: string;
  streetAddress: string;
  companyName: string;
  phoneNumber: string;
  countryOfEsidence: string;
  streetAddressLine2: string;
  investmentCeiling: string;
  birthTime: Date;
  provinceOfResidence: string;
  zipCode: number;
  yourPositionInTeam: string;
  preferredInvestment: string;
  wayKnowUs: string;
}

interface contactUSFormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}


interface InvestorRegistrationFormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email:string;
  countryOfResidence: string;
  provinceOfResidence: string;
  streetAddress: string;
  streetAddressLine2: string;
  postalCode: string;
  companyName: string;
  investmentCeiling: string;
  positionInTeam: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
}


interface partnerMembershipFormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email:string;
  countryOfResidence: string;
  provinceOfResidence: string;
  // streetAddress: string;
  // streetAddressLine2: string;
  // postalCode: string;
  companyName: string;
  investmentCeiling: string;
  // positionInTeam: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
}


enum Type {
  IDEA = 'IDEA',
  MVP = 'MVP',
  TRIAL = 'TRIAL',
  FisrtSale = 'FisrtSale',
  SaleDevelopment = 'SaleDevelopment',
}

interface startupsFormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  countryOfResidence: string;
  provinceOfResidence: string;
  type: Type;
  ideaExplanation: string;
  getToKnowUs: string;
  pitchDeck: boolean;
  pitchDeckFile?: File | null;
  businessPlan: boolean;
  businessPlanFile?: File | null;
  productName: string;
  siteAddress: string;
  customerProblem: string;
  solution: string;
  productLevel: Level;
  scalable: string;
  monetizationOfYourPlan: string;
  structureOfYourSales: string;
  financialModelFile?: File | null;
  cooperatedWithInvestors: string;
  financial: boolean;
  financialFile?: File | null;
  customerCharacteristic:  string;
  currentCustomers: string;
  estimatedMarketSize: string;
  totalTamSamSom: string;
  startupRevenue : string;
  monthlyIncome:  string;
  currentInterestRate: string;
  currentRaisedFunding:  string;
  neededCapital:  string;
  MVP:boolean;
  FirstSale:boolean;
  TrialProduct:boolean;
  SaleDevelopment:boolean;
  Idea:boolean;
}

export {contactUSFormData,Type,BusinessPartnerShipFormData,startupsFormData,partnerMembershipFormData,InvestorRegistrationFormData}