import http.client
import subprocess
import time
import pytest


# Function to start the Flask server as a separate process
def start_flask_server():
    subprocess.Popen(["flask","--app", "ecom", "--debug", "run", "--host 0.0.0.0", "--port 8000"])
    time.sleep(2)  # Give some time for the server to start


def test_homepage_html():
    start_flask_server()
    time.sleep(1)
    host = "localhost"
    port = 8000
    path = "/"

    # Establish a connection to the server
    connection = http.client.HTTPConnection(host, port)
    connection.request("GET", path)

    # Get the response
    response = connection.getresponse()

    # Read and decode the response content
    content = response.read().decode("utf-8")

    # Close the connection
    connection.close()

    assert response.status == 200
    assert "<html>" in content
    assert "<title>" in content


if __name__ == "__main__":
    pass
