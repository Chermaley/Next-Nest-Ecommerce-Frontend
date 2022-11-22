import { User } from "./User";

export type Consultation = {
  id: number;
  updatedAt: string
  creator: User;
  status: ConsultationStatus
}

export enum ConsultationStatus {
  Open = 'Open',
  Close = 'Close'
}

export enum ConsultationType {
  Support = 'Support',
  Cosmetic = 'Cosmetic',
}
