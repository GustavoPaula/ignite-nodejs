import { Answer } from "../entities/answer"

interface AnwserQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
}

export class AnwserQuestionUseCase {
  execute({questionId, instructorId, content}: AnwserQuestionUseCaseRequest) {
    const anwser = new Answer({
      authorId: instructorId,
      questionId,
      content
    })

    return anwser
  }
}