# -*- coding: utf-8 -*-
"""
Created on Tue Nov 17 21:40:41 2020

@author: win10
"""

# 1. Library imports
# uvicorn runs the API application in an asynchronous manner
import uvicorn
from fastapi import FastAPI
from statement import Statement
import numpy as np
import pickle
import pandas as pd

# 2. Create the app object
app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pickle_in = open("classifier_final.pkl", "rb")
classifier = pickle.load(pickle_in)
pickle_in = open("vectorizer_final.pkl", "rb")
vectorizer = pickle.load(pickle_in)

# 3. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello, World'}


# 4. Route with a single parameter, returns the parameter within a message
#    Located at: http://127.0.0.1:8000/AnyNameHere


# 3. Expose the prediction functionality, make a prediction from the passed
#    JSON data and return the predicted Bank Note with the confidence
@app.post('/predict')
def predict_lie(data: Statement):
    data = data.dict()
    print(data)
    final_data = [data['statement_normalized']]
    print(final_data)
    vect_data = vectorizer.transform(final_data)
    print(vect_data)
    # print(classifier.predict([[variance,skewness,curtosis,entropy]]))
    prediction = classifier.predict(vect_data)
    print(prediction)
    if (prediction[0] > 0.5):
        prediction = True
    else:
        prediction = False
    return {
        'prediction': prediction
    }


# 5. Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)

# uvicorn app:app --reload