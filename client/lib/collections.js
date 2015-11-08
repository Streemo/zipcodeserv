Brain = DDP.connect('http://127.0.0.1:2934');
Messages = new Mongo.Collection(null);
Agents = new Mongo.Collection('agents', Brain);
Offices = new Mongo.Collection('offices', Brain);