# vk-eternal-online

Вечный онлайн для [ВКонтакте](https://vk.com/)

## Установка и запуск

1. Скачать и установить [Node.js](https://nodejs.org/)

```sh
$ node -v
v18.12.1
```

```sh
$ npm -v
9.2.0
```

2. Клонировать репозиторий или [скачать](https://github.com/dddoog9/vk-eternal-online/releases/latest)

```sh
git clone https://github.com/dddoog9/vk-eternal-online.git
```

```sh
cd vk-eternal-online
```

3. Создать и открыть файл `.env`

```sh
touch .env
```

```sh
code .env
```

4. Добавить `TOKEN=123` *(вместо `123` вставить [свой токен](https://vkhost.github.io/))* и сохранить

```dosini
TOKEN=YOUR_ACCESS_TOKEN
```

5. Установить зависимости

```sh
npm i
```

6. Запустить файл `start.bat` *(только для Windows)* или выполнить команду в терминале

```sh
npm start
```

## Файл конфигурации

| Ключ          | Обязательно  | Описание                                            | Значение по умолчанию |
| ------------- | ------------ | --------------------------------------------------- | --------------------- |
| `VOIP`        | Нет          | https://dev.vk.com/method/account.setOnline         | `0`                   |
| `TOKEN`       | Да           | https://dev.vk.com/api/access-token/getting-started | Отсутствует           |
| `API_VERSION` | Нет          | https://dev.vk.com/reference/versions               | `5.131`               |
| `DELAY`       | Нет          | Задержка в миллисекундах                            | `180000`              |

## License

[MIT](LICENSE)
