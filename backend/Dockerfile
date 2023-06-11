FROM python:3.9.7-slim-buster

WORKDIR /usr/src/app/backend
ENV FLASK_APP=app
ENV FLASK_ENV=development

COPY requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

CMD ["flask", "run", "--host=0.0.0.0"]
