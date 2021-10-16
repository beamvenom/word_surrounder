"""Processes"""
import re
from collections import Counter
def process_text(text):
    """Surrounds the most frequent word with foo and bar
    Args:
        text (str): The text
    Returns:
         str: The processed text if successful.
    """
    words = re.findall(r'\w+', text.lower())
    most_frequent_word = Counter(words).most_common(1)[0][0]
    processor = re.compile(r'\b' + most_frequent_word + r'\b',re.IGNORECASE)
    processed_text = processor.sub('foo' + most_frequent_word + 'bar', text)
    return processed_text