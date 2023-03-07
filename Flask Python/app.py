from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "testando"

if __name__ == '__main__':
    app.run()

from flask import Flask, redirect, url_for, session
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.errors import HttpError
from googleapiclient.discovery import build
import datetime

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta_aqui'


@app.route('/authorize')
def authorize():
    flow = Flow.from_client_secrets_file('credentials.json', scopes=['https://www.googleapis.com/auth/calendar.events'])
    flow.redirect_uri = url_for('oauth2callback', _external=True)
    authorization_url, state = flow.authorization_url(access_type='offline', include_granted_scopes='true')
    session['state'] = state
    return redirect(authorization_url)


