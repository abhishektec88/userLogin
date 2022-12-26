import { Api } from "../Api";


export const LoginService = async (param) => {
   const {data} = await Api.post('/login', param)
   localStorage.setItem('token', JSON.stringify(data.data))
}