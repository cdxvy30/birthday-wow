db = db.getSiblingDB('admin');
db.createCollection('lineusers');

db.lineusers.insertMany([
  {
    firstName: 'Robert',
    lastName: 'Yen',
    gender: 'Male',
    dateOfBirth: new Date('1985-08-08'),
    email: 'robert.yen@linecorp.com'
  },
  {
    firstName: 'Cid',
    lastName: 'Change',
    gender: 'Male',
    dateOfBirth: new Date('1990-10-10'),
    email: 'cid.change@linecorp.com'
  },
  {
    firstName: 'Miki',
    lastName: 'Lai',
    gender: 'Female',
    dateOfBirth: new Date('1993-04-05'),
    email: 'miki.lai@linecorp.com'
  },
  {
    firstName: 'Sherry',
    lastName: 'Chen',
    gender: 'Female',
    dateOfBirth: new Date('1993-08-08'),
    email: 'sherry.lai@linecorp.com'
  },
  {
    firstName: 'Peter',
    lastName: 'Wang',
    gender: 'Male',
    dateOfBirth: new Date('1950-12-22'),
    email: 'peter.wang@linecorp.com'
  }
]);
