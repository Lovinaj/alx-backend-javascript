namespace Subjects {
    export interface TeacherReact {
      experienceTeachingReact?: number;
    }
    export class React extends Subject {
      constructor(public teacher: TeacherReact) {
        super(teacher);
      }
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
      getAvailableTeacher(): string {
        return this.teacher.experienceTeachingReact !== undefined && this.teacher.experienceTeachingReact > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
      }
    }

  }