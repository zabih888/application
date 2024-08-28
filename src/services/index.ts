const services = {
  login: async (payload: { email: string; password: string }) => {
    return await {
      accessToken: "example-token",
    };
  },
};
export default services;
