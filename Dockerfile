FROM node:17.4.0-bullseye
ARG PORT=3000
ENV PORT ${PORT}
RUN apt-get update
RUN apt-get install npm -y
ADD . .

CMD [ "npm", "start" ]
EXPOSE ${PORT}

