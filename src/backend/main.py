from typing import Annotated, Literal
from uuid import uuid4
from fastapi.applications import FastAPI
from fastapi import File, Response, UploadFile, HTTPException
from csv import DictReader
import logging
from contextlib import asynccontextmanager

from pydantic_models import (
    Document,
    SearchRequest,
    SearchResponse,
    ClassifyTextRequest,
    ClassifyTextResponse,
    BulkUploadResponse,
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
            ),
            Document(
                document_id=uuid4(), content="dolor sit amet", tags=["ok", "news"]
            ),
        ]
    )


@app.get("/classify-text")
async def classify(request: ClassifyTextRequest) -> ClassifyTextResponse:
    return ClassifyTextResponse(tags=["hello", "tag2"])
