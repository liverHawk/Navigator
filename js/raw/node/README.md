# Node.js

## index

## from scrach

### enter docker container

```bash
docker compose up -d
docker compose exec alpine /bin/sh
```

### in container

```bash
apk update
apk upgrade
apk add nodejs npm

npm init
npm run start
```

## set Env

edit `compose.yml:5-6`.

```yml
# dockerfile: Dockerfile.ini
dockerfile: Dockerfile.staged
```

And `npm run start` in container.
