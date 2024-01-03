"""ecom flask server."""
import flask

app = flask.Flask(__name__)
app.config.from_object("ecom.config")

import ecom.views
import ecom.model
import ecom.api