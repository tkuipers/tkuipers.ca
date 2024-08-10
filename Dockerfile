# Use the official NGINX image as a base
FROM nginx:1.27

# Remove the default NGINX website
RUN rm -rf /usr/share/nginx/html/*

# Copy the static website files to the NGINX server directory
COPY ./.output/public /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX when the container has started
CMD ["nginx", "-g", "daemon off;"]
