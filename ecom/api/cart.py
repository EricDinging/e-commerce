"""REST api for cart"""

import pathlib
import flask
import ecom
from ecom.util import get_price

user_cart = {}  # key: id, value: quantity


@ecom.app.route("/api/v1/cart/update/", methods=["POST"])
def update_cart_item():
    data = flask.request.get_json()
    itemid = int(data["itemid"])
    quantity = int(data["quantity"])

    if quantity == 0:
        user_cart.pop(itemid, None)
    else:
        user_cart[itemid] = quantity

    print(user_cart)

    return flask.jsonify({})
