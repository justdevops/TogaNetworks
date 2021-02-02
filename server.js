const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Toga Networks from Raphael!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log("To run the container in another machine run ( docker run -p 3000:3000 justdevops/hauwei )")
})

