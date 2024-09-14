FROM python:3.12-alpine
WORKDIR /code

COPY requirement.txt requirement.txt
RUN pip install --no-cache-dir -r requirement.txt

COPY . .

ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=8080
EXPOSE 8080

CMD ["waitress-serve","--host","127.0.0.1", "--call", "app:create_app"]