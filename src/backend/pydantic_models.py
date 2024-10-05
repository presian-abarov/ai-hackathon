from pydantic import BaseModel, UUID4


class SearchRequest(BaseModel):
    filter_by_tags: list[str] | None
    pagination_offset: int = 0


class Document(BaseModel):
    document_id: UUID4
    content: str
    tags: list[str]


class SearchResponse(BaseModel):
    documents: list[Document]


class ClassifyTextRequest(BaseModel):
    content: str


class ClassifyTextResponse(BaseModel):
    tags: list[str]
