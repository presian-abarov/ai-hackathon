# ai-hackathon

Check Project and Issues tabs for ongoing tasks

## (DEV) Python dependencies

Create your virtual environment:

```bash
uv venv
source .venv/bin/activate
```

Compile the dependencies:

```bash
uv pip compile -r requirements.in > requirements.txt

```

Install the dependencies:

```bash
uv pip install -r requirements.txt
```

## Running the back-end

```bash
docker /build -t aib:latest .
docker run --rm -p 8080:8080 aib:latest
```

Point your browser to `localhost:8080/`
