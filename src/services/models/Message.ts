export type Message = {
  id: number
  userId: number;
  consultationId: number;
  message: string;
  attachments?: Attachment[]
}

export type Attachment = {
  id: string;
  content: string;
  name: string;
}