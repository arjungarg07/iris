document
.getElementById("post-form")
.addEventListener("submit", async (e) => {
  e.preventDefault();

  // console.log(e.target.elements);

  const [
    { value: name },
    { value: title },
    { value: type },
    { value: tags },
    { value: content },
  ] = e.target.elements;

//   console.log(name, title, type, tags, content);
  const data = {
    name,
    title,
    type,
    tags,
    content,
  };
//   console.log(data);

  const response = await fetch("/postform", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

//   var res = response.text();
//   console.log(res);

});
