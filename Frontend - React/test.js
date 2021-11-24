const axios = require('axios')


async function test() {
   try {
      const data = await axios.get('https://todo-api-learning.herokuapp.com/v1/tasks/4?order=desc&filterBy=') 
      console.log(data.data)
   } catch(err) {
   console.log(err.response.status, err.response.data.message)
   }
}

test()