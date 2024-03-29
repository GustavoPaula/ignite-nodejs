import { Answer } from "../entities/answer"
import { AnswerRepository } from "../repositories/answer-repository"

interface AnswerQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(
    private answerRepository: AnswerRepository,
  ) {}

  async execute({questionId, instructorId, content}: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      authorId: instructorId,
      questionId,
      content
    })

    await this.answerRepository.create(answer)

    return answer
  }
}