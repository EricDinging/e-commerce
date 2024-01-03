# e-commerce

## Setup
Prepare Python environment
```
python3 -m venv env
source env/bin/activate
pip install --upgrade pip setuptools wheel

sudo apt-get install sqlite3 curl
pip install httpie
pip install html5validator
pip install -r requirements.txt
pip install -e .
```

Prepare REACT/JS environment
```
sudo apt install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=21
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt update
sudo apt install nodejs -y
npm ci .
```

## API
| HTTP method | URL | Description |
|----------|----------|----------|
| GET | /api/v1/item/ | Return all available items |
| GET | /api/v1/item/<id>/ | Return item <id> |
| GET | /api/v1/cart/total/ | Return total price |
| POST | /api/v1/cart/update | Update cart item |
| POST | /api/v1/cart/checkout/ | Checkout |

## Run
```
npx webpack --watch
flask --app ecom --debug run --host 0.0.0.0 --port 8000
```
Go to http://localhost:8000

## Note
- Item Catalog: done 
- Shopping Cart: done
- Add/Remove Items: done
- Checkout Process: done
- Admin: not implemented
- API: done, see above
- Frontend: done
- Unit Tests: not implemented in time