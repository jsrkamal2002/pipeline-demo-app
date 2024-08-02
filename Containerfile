FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9097
RUN chown -R 1000680000:0 /app && chmod -R g+rwx /app
USER 1000680000
CMD ["npm", "start"]