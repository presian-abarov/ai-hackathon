FROM python:3.10

WORKDIR /api

COPY ./requirements.txt /api/requirements.txt

RUN python -m pip install --no-cache-dir --disable-pip-version-check -r /api/requirements.txt

COPY . /api/.

ENV PATH="/api/.local/bin:${PATH}"

CMD ["gunicorn", "--preload", "--bind", ":8080", "--workers", "4", "--timeout", "0", "--worker-class", "uvicorn.workers.UvicornWorker", "main:app"]
