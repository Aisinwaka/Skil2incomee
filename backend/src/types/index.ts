export interface AuthRequest {
  email?: string;
  phone?: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface AssessmentData {
  age: number;
  education: string;
  location: string;
  lga: string;
  languages: string[];
  currentIncome: number;
  skills: string[];
  experience: number;
}
