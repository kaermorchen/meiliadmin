FROM lipanski/docker-static-website:latest

COPY dist .

EXPOSE 4200

CMD ["/busybox", "httpd", "-f", "-v", "-p", "4200", "-c", "httpd.conf"]
