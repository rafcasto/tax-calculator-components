FROM node:16.13.1-alpine

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN npm set progress=false && npm install

# Make port 6006 available
EXPOSE 6006

# run storybook app
CMD ["yarn", "run", "storybook"]



