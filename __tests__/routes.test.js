'use strict';

process.env.SECRET = "toes";

const server = require('../src/server.js').server;
const supergoose = require('@code-fellows/supergoose');
const userSchema = require('../src/auth/models/users.js')

const mockRequest = supergoose(server);

let users = {
  // for signup
  newAdmin: { username: 'newAdmin', password: 'password' , role : 'admin' },
  newUser: { username: 'newUser', password: 'password', role : 'user' },
  // for signin
  admin: { username: 'admin', password: 'password' , role : 'admin' },
  user: { username: 'user', password: 'password', role : 'user' },
};

describe('Auth Router', () => {

  beforeAll( async () => {
    // creating users for signin
    await userSchema.create(users.admin);
    await userSchema.create(users.user);
  });

  describe(`Non-admin users`, () => {

    it('can create one', async () => {
      const response = await mockRequest.post('/signup').send(users.newUser);
      const userObject = response.body;
      expect(response.status).toBe(201);
      expect(userObject.token).toBeDefined();
      expect(userObject.user._id).toBeDefined();
      expect(userObject.user.username).toEqual(users.newUser.username)
    });

    it('can signin with basic', async () => {
      const response = await mockRequest.post('/signin')
        .send(users.user);
      const userObject = response.body;
      expect(response.status).toBe(200);
      expect(userObject.token).toBeDefined();
      expect(userObject.user._id).toBeDefined();
      expect(userObject.user.username).toEqual(users.user.username)
    });

    it('can signin with bearer', async () => {
      // First, use basic to login to get a token
        const response = await mockRequest.post('/signin')
        .send(users.user);
      const token = response.body.token;
      // First, use basic to login to get a token
      const bearerResponse = await mockRequest
        .get('/users')
        .set('Authorization', `Bearer ${token}`)
      // Not checking the value of the response, only that we "got in"
      expect(bearerResponse.status).toBe(200);
    });

  });

  describe(`Admin users`, () => {
    it('can create one', async () => {
      const response = await mockRequest.post('/signup').send(users.newAdmin);
      const userObject = response.body;
      expect(response.status).toBe(201);
      expect(userObject.token).toBeDefined();
      expect(userObject.user._id).toBeDefined();
      expect(userObject.user.username).toEqual(users.newAdmin.username)
    });

    it('can signin with basic', async () => {
      const response = await mockRequest.post('/signin')
        .send(users.admin);
      const userObject = response.body;
      expect(response.status).toBe(200);
      expect(userObject.token).toBeDefined();
      expect(userObject.user._id).toBeDefined();
      expect(userObject.user.username).toEqual(users.admin.username)
    });

    it('can signin with bearer', async () => {
      // First, use basic to login to get a token
        const response = await mockRequest.post('/signin')
        .send(users.admin);
      const token = response.body.token;
      // First, use basic to login to get a token
      const bearerResponse = await mockRequest
        .get('/users')
        .set('Authorization', `Bearer ${token}`)
      // Not checking the value of the response, only that we "got in"
      expect(bearerResponse.status).toBe(200);
    });

  });

  describe('bad logins', () => {
    it('basic fails with known user and wrong password ', async () => {
      const response = await mockRequest.post('/signin')
        .send({'username': 'admin', 'password': 'xyz'})
      const userObject = response.body;
      expect(response.status).toBe(403);
      expect(userObject.user).not.toBeDefined();
      expect(userObject.token).not.toBeDefined();
    });

    it('basic fails with unknown user', async () => {
      const response = await mockRequest.post('/signin')
      .send({'username': 'nobody', 'password': 'xyz'})
      const userObject = response.body;
      expect(response.status).toBe(403);
      expect(userObject.user).not.toBeDefined();
      expect(userObject.token).not.toBeDefined()
    });

    it('bearer fails with an invalid token', async () => {
      // First, use basic to login to get a token
      const bearerResponse = await mockRequest
        .get('/users')
        .set('Authorization', `Bearer foobar`)
      // Not checking the value of the response, only that we "got in"
      expect(bearerResponse.status).toBe(403);
    })
  })

});
