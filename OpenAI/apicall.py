import os
from dotenv import load_dotenv
import openai
from openai import OpenAI

load_dotenv()
# Set your OpenAI API key here
OPENAI_API_KEY = os.getenv('openai_api_key')
print(OPENAI_API_KEY)


client = OpenAI(
    api_key=OPENAI_API_KEY
)

query = """
You are a helpful research assistant.Make me a poem about fish.
"""

def chat(query):

    messages = [
        {"role": "system", 
         "content": query},
        
    ]

    # Make the API call
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            temperature=0.7  # creativity
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

response =  chat(query)
print(response)