import React from 'react';
import axios, { AxiosResponse } from 'axios';

interface Data {
  name: string;
  username: string;
}

export const fetchUsername = async () => {
  let response: AxiosResponse<Data[]>;
  try {
    response = await axios.get<Data[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
    return response;
  } catch (e) {}
};

export const fetchUsername2 = async () => {
  let response: AxiosResponse<Data[]>;
  try {
    response = await axios.get<Data[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
    return response;
  } catch (e) {}
};

const Username = () => {
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    fetchUsername().then((datas) => {
      if (datas) {
        setUsername(datas.data[0].name);
        console.log(datas.data[0].name);
      }
    });

    fetchUsername2().then((datas) => {
      if (datas) {
        console.log(datas.data[0].username);
      }
    });
  }, []);

  return <div> {username ? `hello ${username}` : null}</div>;
};

export default Username;
