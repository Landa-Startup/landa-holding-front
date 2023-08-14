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
  birthDate: string;
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
  birthDate: string;
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

  const initialStartupsFormData: startupsFormData = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    countryOfResidence: '',
    provinceOfResidence: '',
    type: Type.IDEA,
    ideaExplanation: '',
    getToKnowUs: '',
    pitchDeck: true,
    pitchDeckFile: null as File | null,
    businessPlan: true,
    businessPlanFile: null as File | null,
    productName: '',
    siteAddress: '',
    customerProblem: '',
    solution: '',
    productLevel: Level.basicPrinciple,
    scalable: '',
    monetizationOfYourPlan: '',
    structureOfYourSales: '',
    financialModelFile: null as File | null,
    cooperatedWithInvestors: '',
    financial: true,
    financialFile: null as File | null,
    customerCharacteristic: '',
    currentCustomers: '',
    estimatedMarketSize: '',
    totalTamSamSom: '',
    startupRevenue: '',
    monthlyIncome: '',
    currentInterestRate: '',
    currentRaisedFunding: '',
    neededCapital: '',

  }

export {contactUSFormData,BusinessPartnerShipFormData,startupsFormData,partnerMembershipFormData,InvestorRegistrationFormData,initialStartupsFormData}