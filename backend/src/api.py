
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import text_processor as tp

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


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return "waiting for action"


@app.post("/uploadfile/")
def create_upload_file(text: Text) -> str:
    return tp.process_text(text.text)
