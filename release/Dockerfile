FROM renkman/dockersandbox:latest
ARG release=1

WORKDIR /usr/src/app

# Set release id
RUN sed -i "s/\\$\\$\_RELEASE\_\\$\\$/${release}/g" server.js