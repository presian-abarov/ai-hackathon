from fastapi.applications import FastAPI
import logging
from uuid import uuid4
from contextlib import asynccontextmanager

from pydantic_models import (
    Document,
    SearchRequest,
    SearchResponse,
    ClassifyTextRequest,
    ClassifyTextResponse,
)


logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):  # noqa
    yield


app: FastAPI = FastAPI(lifespan=lifespan)


@app.post("/search-by-tag")
async def search(request: SearchRequest) -> SearchResponse:
    # TODO:
    # if request.filter_by_tags:
    #     return SearchResponse(documents=[])
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


# TODO: should this add to the database?
@app.post("/classify-text")
async def classify(request: ClassifyTextRequest) -> ClassifyTextResponse:
    return ClassifyTextResponse(tags=[tag for tag in ["adsf", "jjjj"]])
