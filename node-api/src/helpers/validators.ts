import { usersMemory } from '../modules/user/Utils/userFunctions.js';
import { ApiError, BadRequestError, ConflictError } from './ApiErrors.js';
import { Either, left, right } from './Either.js';

/**
 *
 * @param item Objeto a ser verificado.
 * @returns Tipo do objeto, sem ser falsy.
 * @example const objectA: string | undefined = '';
 * const objectB: User | undefined = {};
 * const objectC: User | undefined = {name: '...'};
 * -
 * existValueIn(objectA) // false;
 * existValueIn(objectB) // false;
 * existValueIn(objectC) // true -> objectC is User;
 */
export const existValueIn = <T>(item: T): item is NonNullable<T> =>
  !!(item && Object.keys(item).length);

interface BodyPayload {
  [key: string]: string;
}

/**
 * Chaves representam os endpoins, e valores representam os campos recebidos pelo mesmo.
 */
const fields = {
  user: ['name', 'password', 'email'],
  login: ['password', 'email'],
} as const;

export type EndpointPayload<T extends keyof typeof fields> = {
  [key in (typeof fields)[T][number]]: string;
};

/**
 * Recebe o body da requisição e de acordo com o endpoint escolhido, valida se todos os campos do mesmo foram enviados. Se sim, assegura que o tipo do objeto passado contém os campos necessários. Se não, false é retornado.
 * @param endpoint Endpoint no qual os dados estão vindo.
 * @param payload Corpo enviado na requisição.
 * @returns Boolean.
 * @example allFieldsSendedFrom('login', { email: '...' }) // false
 * allFieldsSendedFrom('login', { email: '...', password: '...' }) // true -> objeto passado contém as propriedades de 'login'.
 */
export const allFieldsSendedFrom = <T extends keyof typeof fields>(
  endpoint: T,
  payload: object,
): Either<ApiError, EndpointPayload<T> & BodyPayload> => {
  const requiredFields: readonly string[] = fields[endpoint];

  const allFieldsWereSend = requiredFields.every((field) => field in payload);

  if (!allFieldsWereSend)
    return left(new BadRequestError('Some fields were not sent'));

  return right(payload as EndpointPayload<T> & BodyPayload);
};

export const emaillAreadyInUse = (email: string): Either<ApiError, boolean> => {
  const result = usersMemory.some((user) => user.email === email);
  if (result) return left(new ConflictError('This email is already in use'));
  return right(result);
};
