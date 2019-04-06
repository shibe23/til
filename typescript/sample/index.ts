import axios, { AxiosPromise } from 'axios';

const json: AxiosPromise = axios.get('http://localhost:3000/articles')

json.then().then((res)=>{
  console.log(res)
})


interface AjaxCall {
}


var foo: string = 'hoge'
foo = 2