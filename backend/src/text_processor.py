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
    if (len(text)):
        words = re.findall(r'\w+', text.lower())
        most_frequent_word = Counter(words).most_common(1)[0][0]
        words_ignore_case = re.findall(most_frequent_word, text, re.IGNORECASE)
        for word in set(words_ignore_case):
            processor = re.compile(r'\b' + word + r'\b')
            processed_text = processor.sub('foo' + word + 'bar', text)
            text = processed_text
        return processed_text
    else:
        return ""