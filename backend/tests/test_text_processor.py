from src import text_processor

def test_one_word():
    input = "The"
    output = text_processor.process_text(input)
    assert output == f"foo{input}bar"

def test_most_frequent_word():
    input = "the the the ok ok"
    output = text_processor.process_text(input)
    assert output == "foothebar foothebar foothebar ok ok"

def test_word_inside_other_word():
    input = "the mother needs the therapist"
    output = text_processor.process_text(input)
    assert output == "foothebar mother needs foothebar therapist"

def test_most_frequent_word_capitalization():
    input = "the The thE ok ok"
    output = text_processor.process_text(input)
    assert output == "foothebar fooThebar foothEbar ok ok"

def test_most_frequent_word_same_count():
    input = "the the ok ok"
    output = text_processor.process_text(input)
    assert output == "foothebar foothebar ok ok"

def test_citation():
    input = "\"The\'"
    output = text_processor.process_text(input)
    assert output == "\"fooThebar\'"

def test_empty():
    input = ""
    output = text_processor.process_text(input)
    assert output == ""

def test_underscore_combined():
    input = "the_the ok ok"
    output = text_processor.process_text(input)
    assert output == "the_the foookbar foookbar"

def test_underscore_separate():
    input = "__the__ _the the_ the ok ok ok ok"
    output = text_processor.process_text(input)
    assert output == "__the__ _the the_ foothebar ok ok ok ok"
def test_null():
    input
    output = text_processor.process_text(input)
    assert output == "ERROR: text is not defined"
