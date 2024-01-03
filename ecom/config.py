"""ecom development configuration."""

import pathlib

# Root of this application,
APPLICATION_ROOT = "/"

# Secret key for encrypting cookies
SECRET_KEY = b"""Ebc\xd3\xbd\xf6j\x7f^
            !r\x80\x82k\xe5\xa9\xc5\xdd\xfe\xa8\x96\xf14\xe3"""
SESSION_COOKIE_NAME = "login"

# File Upload to var/uploads/
ECOM_ROOT = pathlib.Path(__file__).resolve().parent.parent
TEMPLATE_FOLDER = ECOM_ROOT / "ecom" / "templates"
MAX_CONTENT_LENGTH = 16 * 1024 * 1024

# Database file is var/insta485.sqlite3
DATABASE_FILENAME = ECOM_ROOT / "var" / "ecom.sqlite3"
