FROM nginx:mainline-alpine
RUN rm /etc/nginx/conf.d/*
ADD src/hello.conf /etc/nginx/conf.d/
ADD src /usr/share/nginx/html/
