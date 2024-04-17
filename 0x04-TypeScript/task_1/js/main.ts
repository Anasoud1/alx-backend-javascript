export interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
