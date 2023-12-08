import { StartupsFormData } from "../types/global";
import { PartnerMembershipFormData } from "../types/global";
import { JobFormData } from '../types/global';
import { InvestorRegistrationFormData } from '../types/global';
import { Entrepreuneur } from '../types/global';
import { ContactUSFormData } from '../types/global';
import { FormData } from '@/types/global';
import { LandaGeneFormData } from '../types/global';

enum Type {
    IDEA = 'IDEA',
    MVP = 'MVP',
    TRIAL = 'TRIAL',
    FisrtSale = 'FisrtSale', // Typo: Should be "FirstSale"
    SaleDevelopment = 'SaleDevelopment',
}

const initialStartupsFormData: StartupsFormData = {
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
    pitchDeckFile: '' as File | '',
    businessPlan: true,
    businessPlanFile: '' as File | '',
    productName: '',
    siteAddress: '',
    customerProblem: '',
    solution: '',
    // productLevel: '',
    scalable: '',
    monetizationOfYourPlan: '',
    structureOfYourSales: '',
    financialModelFile: '' as File | '',
    cooperatedWithInvestors: '',
    financial: true,
    financialFile: '' as File | '',
    customerCharacteristic: '',
    currentCustomers: '',
    estimatedMarketSize: '',
    totalTamSamSom: '',
    startupRevenue: '',
    monthlyIncome: '',
    currentInterestRate: '',
    currentRaisedFunding: '',
    neededCapital: '',
    MVP: false,
    FirstSale: false,
    TrialProduct: false,
    SaleDevelopment: false,
    Idea: false,
  };

  const initialPartnerMembershipFormData: PartnerMembershipFormData = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    countryOfResidence: '',
    provinceOfResidence: '',
    companyName: '',
    investmentCeiling: '',
    preferredAreas: '',
    howDidYouKnowUs: '',
  };

  const initialJobFormData: JobFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cvFile: '' as File | '',
  };

  const initialApplicationFormData: LandaGeneFormData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    company: '',
  };

  const initialInvestorRegistrationFormData: InvestorRegistrationFormData = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    countryOfResidence: '',
    provinceOfResidence: '',
    companyName: '',
    interests: '',
    positionInTeam: '',
    preferredAreas: '',
    howDidYouKnowUs: '',
  };

  const initialFormData: Entrepreuneur = {
    email: '',
    companyName: '',
    phoneNumber: '',
    website: '',
    fieldOfProfessional: '',
  };

  const ContactFormData: ContactUSFormData = {
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  };

  const RegisterationFormData: FormData = {
    email: '',
    password: ''
  }

  export {
    initialStartupsFormData, 
    initialPartnerMembershipFormData, 
    initialJobFormData, 
    initialInvestorRegistrationFormData,
    initialFormData,
    ContactFormData,
    RegisterationFormData,
    initialApplicationFormData
  }
