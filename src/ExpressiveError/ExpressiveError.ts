export default class ExpressiveError extends Error {
  constructor(
    message: string,
    public readonly description: string = message,
    public readonly solution?: string
  ) {
    super(message) // 'Error' breaks prototype chain here
    if (new.target) {
      Object.setPrototypeOf(this, new.target.prototype) // Restore prototype chain
    }
  }

  static serverError() {
    return new ExpressiveError(
      'services/internal-server-error',
      'Ошибка сервера.',
      'Попробуйте позже.'
    )
  }

  static noConnection() {
    return new ExpressiveError(
      'services/no-connection',
      'Нет соединения.',
      'Проверьте подключение к Интернету.'
    )
  }

  static unknown() {
    return new ExpressiveError('services/unknown', 'Неизвестная ошибка.')
  }

  static common(response: Response) {
    switch (response.status) {
      case 500:
        return new ExpressiveError(
          'services/internal-server-error',
          'Ошибка сервера.',
          'Попробуйте позже.'
        )
      default:
        return ExpressiveError.unknown()
    }
  }
}
