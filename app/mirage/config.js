export default function() {
  this.get('/contacts', function() {
    return {
      data: [{
        id: 1,
        type: 'contact',
        attributes: {
          firstname: 'Petar',
          lastname: 'Petrov',
          email: 'pp@gmail.com',
          phone: '359123456',
          isarchived: false 
        }
      }, {
        id: 2,
        type: 'contact',
        attributes: {
          firstname: 'Georgi',
          lastname: 'Georgiev',
          email: 'gg@gamil.com',
          phone: '359123789',
          isarchived: false
        }
      }, {
        id: 3,
        type: 'contact',
        attributes: {
          firstname: 'Ivan',
          lastname: 'Ivanov',
          email: 'ii@gmail.com',
          phone: '359987456',
          isarchived: false
        }
      }, {
        id: 4,
        type: 'contact',
        attributes: {
          firstname: 'John',
          lastname: 'Doe',
          email: 'jd@gmail.com',
          phone: '35998745678',
          isarchived: true
        }
      }, {
        id: 5,
        type: 'contact',
        attributes: {
          firstname: 'Gigi',
          lastname: 'Buffon',
          email: 'gb@gmail.com',
          phone: '35912987456',
          isarchived: true
        }
      }]
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
