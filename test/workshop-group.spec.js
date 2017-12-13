const app = require('../server')
const request = require('supertest')

describe('GET /contacts', () => {
    it('should return 1st list of contact', (done) => {
        request(app).get('/contacts')
            .expect(200)
            .then((res) => {
                let contacts = res.body
                expect(contacts instanceof Array).toBeTruthy()

                let contact = contacts[0]
                expect(contact.id).toBe(0)
                expect(contact.name).toBeTruthy()
                expect(contact.email).toBeTruthy()
                expect(contact.phone).toBeTruthy()
                expect(contact.url).toBeTruthy()
                expect(contact.notes).toBeTruthy()
                done()
            })
    })
})

describe('GET /contacts/:id', () => {
    it('get contact id = [3]', (done) => {
        request(app).get('/contacts/3')
            .expect(200)
            .then((res) => {
                let contact = res.body
                expect(contact instanceof Object).toBeTruthy()

                expect(contact.id).toEqual(3)
                expect(contact.id).toBeDefined()
                expect(contact.name).toBeTruthy()
                expect(contact.email).toBeTruthy()
                expect(contact.phone).toBeTruthy()
                expect(contact.url).toBeTruthy()
                expect(contact.notes).toBeTruthy()
                done()
            })
    })
})

describe('POST /contacts', () => {
        it('should created new contact', (done) => {
            request(app).post('/contacts')
                .send({name: 'TEST POST', email: 'TEST@post.com', phone: '111-111-1111', url: 'www.post.com', notes: 'TEST POST.'})
                .expect(201).then((res) => {
                    let contact = res.body
                    expect(contact.id).not.toBeNull()                   
                    expect(contact.name).toBe('TEST POST')
                    expect(contact.email).toBe('TEST@post.com')
                    expect(contact.phone).toBe('111-111-1111')
                    expect(contact.url).toBe('www.post.com')
                    expect(contact.notes).toBe('TEST POST.')
                    done()
                })
         })
    })


