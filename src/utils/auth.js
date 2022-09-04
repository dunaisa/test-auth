export const BASE_URL = 'http://localhost:3000';

const checkResponse = (res) => {
  if (res.ok) {
    console.log(res)
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ password, email }) => {
  console.log({ password, email })
  return fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
    .then(checkResponse)
};

export const authorize = ({ password, email }) => {
  console.log({ password, email })
  return fetch(`${BASE_URL}/sign-in`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password,
      email,
    })
  })
    .then(checkResponse)
    .then((res) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        return res;
      }
    })

};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(checkResponse)
    .then(data => data)
}
