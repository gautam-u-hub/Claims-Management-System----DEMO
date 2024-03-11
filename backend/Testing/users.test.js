const request = require('supertest');
const app = require('../server'); 


const loginAndGetToken = async () => {
    const loginResponse = await request(app)
        .post('/auth/login')
        .send({
            email: 'admin7@gmail.com',
            password: 'passwordd'
        });
    const token = loginResponse.body.token;
    
    return token;
};
const loginAndGetTokenUser = async () => {
    const loginResponse = await request(app)
        .post('/auth/login')
        .send({
            email: 'pH1@gmail.com',
            password: 'password'
        });
    const token = loginResponse.body.token;

    return token;
};


describe('Protected Routes', () => {
    let token;

    beforeEach(async () => {
        token = await loginAndGetToken();
    });

    it('should access the protected user route', async () => {
        const response = await request(app)
            .get('/user')
            .set('Cookie', [`token=${token}`]);

        expect(response.status).toBe(200);
    });

    it('should access the protected policy holders route', async () => {
        const response = await request(app)
            .get('/all-users')
            .set('Cookie', [`token=${token}`]);

        expect(response.status).toBe(200);
    });
    it('should update claim status to "Reimbursed"', async () => {
        const response = await request(app)
            .put(`/TPA/claims/${"65e976f52818a3ef3abb6b37"}`)
            .set('Cookie', [`token=${token}`])
            .send({ status: 'Reimbursed' });
        console.log(response.body);
        expect(response.status).toBe(200);
        expect(response.body.claim.status).toBe('Reimbursed');
    });
    it('should not access the profile of a user', async () => {
        const response = await request(app)
            .get('/user')

        expect(response.status).toBe(401);
    });





});


describe('once again a protected route', () => {
    let token;

    beforeEach(async () => {
        token = await loginAndGetTokenUser();
    });
    it('should access the protected policy holders route', async () => {
        const response = await request(app)
            .get('/all-users')
            .set('Cookie', [`token=${token}`]);
        console.log(response);
        expect(response.status).toBe(401);
    });





})

it('should register a new user', async () => {
    const res = await request(app)
        .post('/auth/register')
        .send({
            name: 'testadmin',
            email: 'testadmin@example.com',
            password: 'password'
        });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
}, 50000);
