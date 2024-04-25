const FIREBASE_AUTH_ERRORS: Record<string, string> = {
  'auth/claims-too-large':
    'Размер полезной нагрузки claims превышает максимально допустимый размер 1000 байт.',
  'auth/email-already-exists':
    'Предоставленный email уже используется существующим пользователем. Каждый пользователь должен иметь уникальный email.',
  'auth/id-token-expired': 'Предоставленный токен Firebase ID истёк.',
  'auth/id-token-revoked': 'Токен Firebase ID был отозван.',
  'auth/insufficient-permission':
    'Учетные данные, использованные для инициализации Admin SDK, не имеют достаточных прав доступа для ресурса аутентификации. См. документацию по настройке проекта Firebase.',
  'auth/internal-error':
    'Сервер аутентификации оставил неожиданную ошибку при обработке запроса.',
  'auth/invalid-argument':
    'Был предоставлен недопустимый аргумент для метода аутентификации.',
  'auth/invalid-claims':
    'Пользовательские атрибуты claims, предоставленные для setCustomUserClaims(), являются недопустимыми.',
  'auth/invalid-continue-uri':
    'Адрес continue URL должен быть допустимым строковым значением.',
  'auth/invalid-creation-time':
    'Время создания должно быть допустимой строкой даты UTC.',
  'auth/invalid-credential':
    'Учетные данные, использованные для аутентификации Admin SDK, не могут быть использованы для выполнения необходимого действия.',
  'auth/invalid-disabled-field':
    'Предоставленное значение для свойства disabled пользователя является недопустимым.',
  'auth/invalid-display-name':
    'Предоставленное значение для свойства displayName пользователя является недопустимым.',
  'auth/invalid-dynamic-link-domain':
    'Предоставленный динамический домен ссылки не настроен или не авторизован для текущего проекта.',
  'auth/invalid-email':
    'Предоставленное значение для свойства email пользователя является недопустимым.',
  'auth/invalid-email-verified':
    'Предоставленное значение для свойства emailVerified пользователя является недопустимым.',
  'auth/invalid-hash-algorithm':
    'Алгоритм хеширования должен соответствовать одному из допустимых алгоритмов.',
  'auth/invalid-hash-block-size':
    'Размер блока хеширования должен быть допустимым числом.',
  'auth/invalid-hash-derived-key-length':
    'Длина ключа, полученного хешированием, должна быть допустимым числом.',
  'auth/invalid-hash-key':
    'Ключ хеширования должен быть допустимым буфером байтов.',
  'auth/invalid-hash-memory-cost':
    'Стоимость памяти хеширования должна быть допустимым числом.',
  'auth/invalid-hash-parallelization':
    'Параллелизация хеширования должна быть допустимым числом.',
  'auth/invalid-hash-rounds':
    'Количество раундов хеширования должно быть допустимым числом.',
  'auth/invalid-hash-salt-separator':
    'Поле разделителя соли хеширования должно быть допустимым буфером байтов.',
  'auth/invalid-id-token':
    'Предоставленный токен Firebase ID является недопустимым.',
  'auth/invalid-last-sign-in-time':
    'Время последнего входа в систему должно быть допустимой строкой даты UTC.',
  'auth/invalid-page-token':
    'Предоставленный токен следующей страницы в listUsers() является недопустимым.',
  'auth/invalid-password':
    'Предоставленное значение для свойства password пользователя является недопустимым.',
  'auth/invalid-password-hash':
    'Хеш пароля должен быть допустимым буфером байтов.',
  'auth/invalid-password-salt':
    'Соль пароля должна быть допустимым буфером байтов.',
  'auth/invalid-phone-number':
    'Предоставленное значение для свойства phoneNumber является недопустимым.',
  'auth/invalid-photo-url':
    'Предоставленное значение для свойства photoURL пользователя является недопустимым.',
  'auth/invalid-provider-data':
    '-providerData должен быть допустимым массивом объектов UserInfo.',
  'auth/invalid-provider-id':
    'providerId должен быть допустимым поддерживаемым идентификатором провайдера.',
  'auth/invalid-oauth-responsetype':
    'Только один тип ответа OAuth должен быть установлен в true.',
  'auth/invalid-session-cookie-duration':
    'Длительность сеанса cookie должна быть допустимым числом в миллисекундах между 5 минутами и 2 неделями.',
  'auth/invalid-uid':
    'Предоставленный uid должен быть недопустимым строковым значением с не более 128 символов.',
  'auth/invalid-user-import':
    'Импортируемый пользовательский рекорд является недопустимым.',
  'auth/maximum-user-count-exceeded':
    'Максимальное количество пользователей для импорта было превышено.',
  'auth/missing-android-pkg-name':
    'Android Package Name должен быть предоставлен, если REQUIRED Android App должен быть установлен.',
  'auth/missing-continue-uri':
    'Допустимый continue URL должен быть предоставлен в запросе.',
  'auth/missing-hash-algorithm':
    'Импорт пользователей с хешами паролей требует, чтобы алгоритм хеширования и его параметры были предоставлены.',
  'auth/missing-ios-bundle-id': 'Запрос отсутствует Bundle ID.',
  'auth/missing-uid':
    'Uid-идентификатор является обязательным для текущей операции.',
  'auth/missing-oauth-client-secret':
    'Секрет клиента OAuth является обязательным для включения потока кода OIDC.',
  'auth/operation-not-allowed':
    'Предоставленный провайдер входа в систему отключен для вашего проекта Firebase. Включите его в разделе методов входа в систему консоли Firebase.',
  'auth/phone-number-already-exists':
    'Предоставленный phoneNumber уже используется существующим пользователем. Каждый пользователь должен иметь уникальный phoneNumber.',
  'auth/project-not-found':
    'Для учетных данных, использованных для инициализации Admin SDK, не найден проект Firebase.',
  'auth/reserved-claims':
    'Один или несколько пользовательских атрибутов claims, предоставленных для setCustomUserClaims(), являются зарезервированными.',
  'auth/session-cookie-expired': 'Предоставленный сеанс cookie Firebase истёк.',
  'auth/session-cookie-revoked': 'Сеанс cookie Firebase был отозван.',
  'auth/too-many-requests':
    'Количество запросов превышает максимально допустимое.',
  'auth/uid-already-exists':
    'Предоставленный uid уже используется существующим пользователем. Каждый пользователь должен иметь уникальный uid.',
  'auth/unauthorized-continue-uri':
    'Домен continue URL не является списком разрешенных доменов. Добавьте домен в список разрешенных доменов в консоли Firebase.',
};

export { FIREBASE_AUTH_ERRORS };
