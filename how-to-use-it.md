docker pull ghcr.io/cadienvan/example-fastify-ci:main
docker run --rm --platform linux/arm64/v8 -i -p 127.0.0.1:15001:3000 ghcr.io/cadienvan/example-fastify-ci:main