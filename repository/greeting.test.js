// Import your repository functions
const { getUsersAreOnBirthday } = require('./greeting');

// Mock Mongoose
jest.mock('mongoose', () => {
  const mockFind = jest.fn().mockReturnThis();
  const mockSelect = jest.fn();
  const mockModel = jest.fn(() => ({
    find: mockFind,
    select: mockSelect.mockImplementation(() => ({
      then: jest.fn().mockImplementation(callback => callback([{ firstName: 'John' }])),
      catch: jest.fn()
    }))
  }));

  return {
    connect: jest.fn().mockImplementation(() => ({
      then: jest.fn().mockReturnThis(),
      catch: jest.fn()
    })),
    model: mockModel,
    Schema: jest.fn()
  };
});

describe('User Repository', () => {
  // Resetting the mock implementation
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should find users on their birthday', async () => {
    const users = await getUsersAreOnBirthday();
    expect(users).toEqual([{ firstName: 'John' }]);
    expect(jest.mocked(mongoose.model()).find).toHaveBeenCalled();
    expect(jest.mocked(mongoose.model()).select).toHaveBeenCalledWith('firstName -_id');
  });

  // Additional tests can be added here as needed
});
