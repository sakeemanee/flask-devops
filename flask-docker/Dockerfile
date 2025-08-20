# Base image
FROM python:3.9-slim

ENV FLASK_PORT=5000

CMD ["python", "app.py"]

# Working directory
WORKDIR /app

# Copy files
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# Run the app
CMD ["python", "app.py"]
