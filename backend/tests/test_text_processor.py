from src import text_processor

def test_one_word():
    input = "hej"
    output = text_processor.process_text(input)
    assert output == f"foo{input}bar"