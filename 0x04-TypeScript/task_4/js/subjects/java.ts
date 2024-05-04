namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number; // add ? to make property optional
    }
    export class Java extends Subject {
      constructor(public teacher: Subjects.Teacher) {
        super();
      }
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
      getAvailableTeacher(): string {
        return this.teacher.experienceTeachingJava! > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
      }
    }

  }