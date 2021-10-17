from src import text_processor

def test_one_word():
    input = "The"
    output = text_processor.process_text(input)
    assert output == f"foo{input}bar"

def test_most_frequent_word():
    input = "the the the ok ok"
    output = text_processor.process_text(input)
    assert output == "foothebar foothebar foothebar ok ok"
