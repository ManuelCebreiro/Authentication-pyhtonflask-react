"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

#Create app flask
api = Blueprint('api', __name__)


@api.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email = email).first()
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route('/register', methods=["POST"])
def user_register():
    email = request.json.get("email")
    password = request.json.get("password")
    user = User(email = email, password = password)
    db.session.add(user)
    db.session.commit()
    return jsonify(({"msg":"Usuario registrado"}))

@api.route('/private', methods=["GET"])
@jwt_required()
def zone_private():
    identity = get_jwt_identity()
    user = User.query.filter_by(email = identity).one_or_none()
    if user:
        return jsonify({"Correcto":True}),200
    else:
        return jsonify({"Correcto":False}),400