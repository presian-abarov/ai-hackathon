import fastapi
from fastapi import Response, status
from fastapi import Request
from fastapi.applications import FastAPI
import logging
from contextlib import asynccontextmanager


logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):  # noqa
    # TODO: read db
    yield


app: FastAPI = FastAPI(lifespan=lifespan)


@app.get("/")
async def main(request: Request) -> Response:
    return Response(content=f"hello {request}", status_code=200)
