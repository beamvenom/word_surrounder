from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import text_processor

app = FastAPI()
origins = [
    "http://localhost:3000",
    "localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


class Text(BaseModel):
    text: str


@app.get("/")
async def read_root() -> str:
    return "...waiting for requests..."


@app.post("/uploadfile/")
def create_upload_file(text: Text) -> str:
    return text_processor.process_text(text.text)
