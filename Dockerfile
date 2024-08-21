# Use the official NGINX image as a base
FROM nginx:1.27

# Remove the default NGINX website
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/nginx.conf

# Copy the static website files to the NGINX server directory
COPY ./.output/public /usr/share/nginx/html
COPY ./res/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX when the container has started
CMD ["nginx", "-g", "daemon off;"]
