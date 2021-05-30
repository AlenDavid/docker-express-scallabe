# Docker express scallable

This repo is a study on how to scalate a express application using docker. Feel free to use this as you want.

## How to install

### Prerequisite tools

You will need docker and nodejs + npm to run this project. You can google them to get started with.
## Used tools

### Nginx load balancer

Basically, you need to use a load balancer so your containers can run independently. The nginx load balancer suits this very fine to me.

### Docker compose

When using a `docker-compose.yml` file, your services always starts sharing the same network. This is needed as the nginx load balancer will listen to the name of the service. See [nginx.conf](nginx.conf) for more details for this.

### WRK

The best tool for benchmarking HTTP requests. Look at [WRK](https://github.com/wg/wrk) for how to use it.

## How this works

Well, at the src folder we have a default express application. It contains two GET routes - / and /users. Feel free to implement more as you might need.

Also, it has a index.test.ts file for test study. It's a simple test using jest and supertest, nothing big.

The docker-compose file starts both nginx load balancer and this express server.

To run both of them, you can copy and paste this on your terminal:

```bash
docker compose up
```

Go to http://localhost:3000/ and you might see the nginx redirecting requests to the express server. Nice!
