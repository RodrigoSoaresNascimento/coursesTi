import { SubjectComputing } from "./subject-computing";

export interface CoursesTi {
  idCourse: number;
  courseName: string;
  institution: string;
  modality: string;
  period: string;
  city: string;
  componentComputingDTOSet: SubjectComputing[];

}
