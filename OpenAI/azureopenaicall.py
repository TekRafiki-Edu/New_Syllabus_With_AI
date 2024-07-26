import openai
import os
from dotenv import load_dotenv
load_dotenv()

# Load environment variables
AZURE_OPENAI_API_KEY = os.getenv('CHAT_4_API_KEY')
AZURE_OPENAI_ENDPOINT = os.getenv("CHAT_4_API_BASE")
AZURE_OPENAI_VERSION = os.getenv("CHAT_4_API_VERSION")
DEPLOYMENT = os.getenv("CHAT_4_DEPLOPMENT_NAME")
MODEL = os.getenv("embed_model")

if not all([AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, DEPLOYMENT]):
    print("One or more environment variables are not set.")
    exit(1)

# Initialize the OpenAI client
client = openai.AzureOpenAI(
    azure_endpoint=AZURE_OPENAI_ENDPOINT,
    api_key=AZURE_OPENAI_API_KEY,
    api_version="2023-09-01-preview"
)

def chat_bot():
    # Initial messages and parameters
    messages = [
        {"role": "system", 
         "content": """You are a helpful research assistant. Make a poem about birds."""},
        
    ]


    try:
        # Make the API call
        response = client.chat.completions.create(
            model=DEPLOYMENT,
            messages=messages,
            temperature=0.7,
            max_tokens=4096
        )

        # Print the response
        #print(f"{response.choices[0].message.role}: {response.choices[0].message.content}")
        return response.choices[0].message.content

    except openai.error.OpenAIError as e:
        print(f"OpenAI error occurred: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

response = chat_bot()
print(response)