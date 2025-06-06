import { ErrorMessageType } from '~/types/AlertTypes';

export const alertErrors: Record<number, ErrorMessageType> = {
    400: {
        title: 'Пользователь с таким login уже существует.',
        description: 'Попробуйте снова.',
    },
    401: {
        title: 'Неверный логин или пароль',
        description: 'Попробуйте снова.',
    },
    403: {
        title: 'E-mail не верифицирован',
        description: 'Проверьте почту и перейдите по ссылке',
    },
    500: {
        title: 'Ошибка сервера',
        description: 'Попробуйте немного позже',
    },
};
