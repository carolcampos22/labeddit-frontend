import axios from 'axios'

export const BASE_URL = "https://labeddit-qxeq.onrender.com"

export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email)

export const validatePassword = (password => /.{6,}/.test(password))

export const validateName = (name, length = 3) => new RegExp (`.{${length},}`).test(name)

export const LoginUser = async (body) => {
    const {data} = await axios.post(`${BASE_URL}/users/login`, body)
    return data;
}

export const SignUpUser = async (body) => {
    const {data} = await axios.post(`${BASE_URL}/users/signup`, body)
    return data;
}

export const ListPosts = async () => {
    const {data} = await axios.get(
        `${BASE_URL}/posts`,
        {
            headers: {
                Authorization: localStorage.getItem("login-labeddit.token")
            }
        }
        )
    return data;
}

export const ListComments = async (id) => {
    const {data} = await axios.get(
        `${BASE_URL}/comments/${id}`,
        {
            headers: {
                Authorization: localStorage.getItem("login-labeddit.token")
            }
        }
        )
    return data;
}

export const AddPost = async (body) => {
    const {data} = await axios.post(
        `${BASE_URL}/posts/`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem("login-labeddit.token")
            }
        }
        )
    return data;
}

export const AddComment = async (body, id) => {
    const {data} = await axios.post(
        `${BASE_URL}/comments/${id}`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem("login-labeddit.token")
            }
        }
        )
    return data;
}


export const LikeOrDislike = async (body, id) => {
    try {
      const { data } = await axios.put(
        `${BASE_URL}/posts/${id}/like`,
        body,
        {
          headers: {
            Authorization: localStorage.getItem('login-labeddit.token'),
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };