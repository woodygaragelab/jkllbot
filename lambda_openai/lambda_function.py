import os
import openai
import json

def lambda_handler(event, context):
    openai.api_key = os.environ.get("OPENAI_API_KEY")
    
    if not openai.api_key:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Missing OpenAI API Key"})
        }

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "user", "content": "Hello, how are you?"}]
        )

        return {
            "statusCode": 200,
            "body": json.dumps(response["choices"][0]["message"])
        }
    
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }
