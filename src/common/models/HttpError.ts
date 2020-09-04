class HttpErrorBase<T> extends Error {
    constructor(message: string, public code: number, public body?: T) {
        super(message);
    }
}

type DefaultErrorBody = Record<string, string>;

export class HttpError extends HttpErrorBase<DefaultErrorBody> {}
