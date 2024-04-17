export interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lasName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`
};

export interface StudentClassConstructor{
  new(firstName: string, lastName: string): StClass;
}

export interface StClass{
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StClass{
  private _firstName!: string;
  private _lastName!: string;
  constructor(firstName: string, lastName: string){
    this._firstName = firstName;
    this._lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this._firstName;
  }
}
