from pydantic import BaseModel


class Statement(BaseModel):
    statement_normalized: str
