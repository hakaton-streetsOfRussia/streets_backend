Пользователь заполняет форму, где пишет username и телефон или почту. На `api/auth/signup`

отправляется запрос:
```
{
    "username": username,
    "phone": phone number,
    "e-mail": e-mail
}
```

Проводится валидация, что есть поле "name" и одно из полей "phone" или "e-mail"

- в таблице User создается запись:
    - ник
    - тип идентификации - 1 - телефон или 2- email или 3- телефон и email
    - телефон (если введен)
    - почта (если введена)
    - код (генерируется из случайных 6 цифр)
    - active: False

На телефон или почту пользователя приходит код

Пользователь отправляет код в форму.
При этом на `api/auth/login`
отправляется запрос:
```
{
    "username": username,
    "phone": phone number or None,
    "email": email or None,
    "code": 6-digits code
}
```

Эти данные сверяются с таблицей User.
Если совпадает username, code и phone или email, то параметр "active" записи в User меняется на True, добавляются дефолтные поля (role). Пользователю выдается JWT токен,
в котором зашито:
- username
- auth_type
- phone
- email
- role
При последующих запросах он отправляет json, содержащий этот токен и username:
{
    "username": username,
    "Auth": JWT
}


Они расшифровываются в JWT и проверяются на совпадение.
