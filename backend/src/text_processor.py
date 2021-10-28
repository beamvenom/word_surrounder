import re
from collections import Counter


def process_text(text):
    """Surrounds the most frequent word with foo and bar
    Underscores and citation marks will be omitted.

    Args:
        text (str): The text

    Returns:
         str: The processed text if successful. If word frequency is the same,
         only the word that appeared first is surrounded with foo and bar

    Raises:
        TypeError: if text is undefined
    """
    try:
        if len(text):
            words = re.findall('(?!_)\w+(?<!_)', text.lower())
            print(words)
            most_frequent_word = Counter(words).most_common(1)[0][0]
            words_ignore_case = re.findall(most_frequent_word, text, re.IGNORECASE)
            for word in set(words_ignore_case):
                processed_text = re.sub(r'\b%s\b' % word, 'foo' + word + 'bar', text)
                text = processed_text
            return processed_text
        else:
            return ""
    except TypeError:
        return "ERROR: text is not defined"