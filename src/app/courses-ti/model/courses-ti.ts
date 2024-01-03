import { SubjectComputing } from "./subject-computing";
import { Period } from "./enums/Period";
import { Modality } from "./enums/Modality";

export interface CoursesTi {
  idCourse: number;
  courseName: string;
  institution: string;
  modality: Modality;
  period: Period;
  city: string;
  componentComputingDTOSet: SubjectComputing[];
}
