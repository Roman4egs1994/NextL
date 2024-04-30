import React, {FC, PropsWithChildren} from 'react';
import {useRouter} from "next/router";

export const LoginNavigate: FC<PropsWithChildren<{}>> = ({children}) => {

    const router = useRouter();
    const isAuth = true; // Запрос за данными пользователя должен быть асинхронным и проверяться корректно

    if (isAuth && router.pathname !== '/test') {
        router.push('/test');
    }

    return (
        <>{children}</>
    );
};
