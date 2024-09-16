
const randomWikipediaUrl = async () => {
  const response = await fetch('https://en.wikipedia.org/wiki/Special:Random', {
    redirect: 'manual',
  });
  return response.headers.get('location');
};

const addTodo = async content => {
  await fetch(process.env.TODO_BACKEND_URL, {
    method: 'POST',
    body: JSON.stringify({ todo: content }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

(async () => {
  const wikipediaUrl = await randomWikipediaUrl();
  await addTodo(`Read ${wikipediaUrl}`);
})();
