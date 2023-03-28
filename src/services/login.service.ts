const url = new URL("https://641ec6d6ad55ae01ccafadc3.mockapi.io/users");

export const getUsers = async (username: string) => {
  console.log(url);
  url.searchParams.append("name", username);
  fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        console.log(res.json());
        return res.json();
      } else {
        return new Error("User does not exist!");
      }
      // handle error
    })
    // .then((tasks) => {
    //   // Do something with the list of tasks
    // })
    .catch((error) => {
      // handle error
      console.log("error: ", error);
      return error;
    });
};
