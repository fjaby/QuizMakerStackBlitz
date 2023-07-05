export interface Question {
  id?:number,
  question:string,
  correct_answer:string,
  selected_answer:string,
  answers: string[]
}

