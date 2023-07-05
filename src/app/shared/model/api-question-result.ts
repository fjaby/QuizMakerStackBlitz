import {QuestionDto} from "../../core/services/questions/questionDto";

export interface ApiQuestionResult {
  response_code: number,
  results: QuestionDto[]
}
