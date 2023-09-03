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
  email: string;
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
  email: string;
  countryOfResidence: string;
  provinceOfResidence: string;
  companyName: string;
  investmentCeiling: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
}
interface JobFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cvFile?: any | null;
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
  pitchDeckFile?: File | '';
  businessPlan: boolean;
  businessPlanFile?: File | '';
  productName: string;
  siteAddress: string;
  customerProblem: string;
  solution: string;
  productLevel: Level;
  scalable: string;
  monetizationOfYourPlan: string;
  structureOfYourSales: string;
  financialModelFile?: File | '';
  cooperatedWithInvestors: string;
  financial: boolean;
<<<<<<< HEAD
  financialFile?: File | '';
  customerCharacteristic:  string;
=======
  financialFile?: File | null;
  customerCharacteristic: string;
>>>>>>> 7ae2909bafa7906f0d0649edbc919adf2c6cf762
  currentCustomers: string;
  estimatedMarketSize: string;
  totalTamSamSom: string;
  startupRevenue: string;
  monthlyIncome: string;
  currentInterestRate: string;
  currentRaisedFunding: string;
  neededCapital: string;
  MVP: boolean;
  FirstSale: boolean;
  TrialProduct: boolean;
  SaleDevelopment: boolean;
  Idea: boolean;
}

export { contactUSFormData, Type, BusinessPartnerShipFormData, startupsFormData, partnerMembershipFormData, InvestorRegistrationFormData, JobFormData }