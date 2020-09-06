# Use an existing docker image as a base
From node:alpine

# Working Directory.Specify to make sure not to copy data into root directory
WORKDIR /usr/app

# Copy the files from the build context into the current working directory of the container
# Necessary so that package.json and index. json are available
COPY ./package.json ./

# Download and install a dependency
RUN npm install

# Here you can specify the files you want to copy later to make the most out of the caching

COPY ./ ./

#Tell the image what to do when it starts as a container
CMD ["npm","start"]
