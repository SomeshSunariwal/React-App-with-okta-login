FROM nginx:alpine

# Setting Work Directory
WORKDIR /usr/share/nginx/html

# Removing static file if any present
RUN rm -rf ./*

# Copy Build Folder
COPY build .

# Exposing PORT
EXPOSE 80

# Starting nginx
CMD ["nginx", "-g","daemon off;"]