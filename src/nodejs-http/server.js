const http = require("http");
const {URL} = require("url");
const port = 8000;
const requestHandler = (request, response) => {
  const parsedUrl = new URL(request.url, "https://ahuney.fr")
  const searchParams = new URLSearchParams(parsedUrl.search);
  console.log(searchParams);
  let name = searchParams.get("name");
  let city = searchParams.get("city");
  if (!searchParams.get("name") || !searchParams.get("city") ) {
    response.end(`Please provide a name AND a city`);
  } else {
    response.end(`Hello ${name} from ${city}`);
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});