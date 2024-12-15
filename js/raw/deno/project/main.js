async function getIndexHtml() {
  const html = await Deno.open("./src/index.html");
  return new Response(html.readable, {
    headers: { "content-type": "text/html; charset=utf-8;" }
  });
}

async function getNotFound() {
  const html = await Deno.open("./src/404.html");
  return new Response(html.readable, {
    headers: { "content-type": "tex/html; chatset=utf-8;" }
  });
}

Deno.serve(async (req) => {
  console.log("Method: ", req.method);

  const url = new URL(req.url);
//  console.log("Headers: ", req.headers);
  console.log("url: ", url.pathname);

  switch(url.pathname) {
    case "/":
      return await getIndexHtml();
    default:
      return await getNotFound();
  }
});