export const userLogin = jest.fn().mockImplementation(() => {
  return Promise.resolve({ id: 5 });
});
