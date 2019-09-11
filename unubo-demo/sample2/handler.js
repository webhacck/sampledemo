module.exports = (event, context) => {
  const result = {
    status: 'Hello Serverless',
  };

  context.status(200).succeed(result);
};
