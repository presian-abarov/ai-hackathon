from uuid import uuid4
from fastapi.applications import FastAPI
import logging
from contextlib import asynccontextmanager

from pydantic_models import (
    Document,
    SearchRequest,
    SearchResponse,
    ClassifyRequest,
    ClassifyResponse,
)


logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)

db: dict = {}


@asynccontextmanager
async def lifespan(app: FastAPI):  # noqa
    global db
    yield


app: FastAPI = FastAPI(lifespan=lifespan)


@app.get("/search-by-tag")
async def search(request: SearchRequest) -> SearchResponse:
    return SearchResponse(
        documents=[
            Document(
                document_id=uuid4(), content="Lorem ipsum", tags=["holiday", "news"]
            )
        ]
    )


@app.get("/classify")
async def classify(request: ClassifyRequest) -> ClassifyResponse:
    return ClassifyResponse()
