const url = new URL("https://json-placeholder.mock.beeceptor.com/login"); //new URL("https://641ec6d6ad55ae01ccafadc3.mockapi.io/users");

export const getUsers = async (
  username: string,
  password: string | undefined // why it require undefined????
) => {
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return new Error("User does not exist!");
      }
      // handle error
    })
    .catch((error) => {
      // handle error
      console.log("error: ", error);
      return error;
    });
};
