# chatAPI

/api/v1

/users
    - /me
    - /me/posts
    - /me/posts/:id
    - /:id

/conversations
    - /me
    - /me/post

/conversations/:conversation_id
    - /:id
    - /:id/patch
    - /:id/delete

/conversations/:conversation_id/messages
    - /post

/conversations/:conversation_id/messages/:message_id
    - /:id
    - /:id/delete


SORT
1. app.js
2. .env
3. config.js
4. database.js
5. modelos
6. controladores
7. servicios
8. rutas