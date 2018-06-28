const app = "I don't do much.";
const token = '05edc866eeeea746dd6346c1509cb2135e6e0ef7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
