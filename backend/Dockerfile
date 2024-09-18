FROM python:3.12-alpine
WORKDIR /code

COPY requirement.txt requirement.txt
RUN pip install --no-cache-dir -r requirement.txt

COPY . .

EXPOSE 8080

CMD ["waitress-serve","--host","0.0.0.0","--port","8080", "app:app"]
