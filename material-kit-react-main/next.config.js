module.exports =  () => {
  const rewrites = () => {
    return [
      {
        source: "/getEnv",
        destination: "http://localhost:8080/getEnv",
      },
    ];
  };
  return {
    rewrites,
  };
};
