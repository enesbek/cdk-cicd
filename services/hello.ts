async function handler(event: any, constext: any) {
  return {
    statusCode: 200,
    body: "Hello world from staging",
  };
}

export { handler };
