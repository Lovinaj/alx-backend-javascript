interface DirectorInterface {  // missing closing curly brace here
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  export class Director implements DirectorInterface {
    workFromHome = () => 'Working from home';
    getCoffeeBreak = () => 'Getting a coffee break';
    workDirectorTasks = () => 'Getting to director tasks';
  }
  
  export class Teacher implements TeacherInterface {
    workFromHome = () => 'Cannot work from home';
    getCoffeeBreak = () => 'Cannot have a break';
    workTeacherTasks = () => 'Getting to work';
  }
  
  export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director()
  
  export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    const task = isDirector(employee) ? 'workDirectorTasks' : 'workTeacherTasks';
    return employee[task]();
  }

  type Subjects = "Math" | "History";
  
  export function teach(subject: Subjects): string {
    return `Teaching ${subject}`;
  }
  
  console.log(teach("Math"));
  console.log(teach("History"));