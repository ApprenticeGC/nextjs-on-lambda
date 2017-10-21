// 'use strict'
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/index.html`)
// })

// // app.listen(3000) // <-- comment this line out from your app

// module.exports = app // export your app so aws-serverless-express can use it

'use strict'

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
// const dev = false
const port = parseInt(process.env.PORT, 10) || 3000
// const app = next({ dir: './src', dev })
const app = next({ dev })
const mobxReact = require('mobx-react')
const handle = app.getRequestHandler()

mobxReact.useStaticRendering(true)

function createServer () {
  const server = express()

  server.get('/p/:id', (req, res) => {
    console.log('get post by id from express server')
    const actualPage = '/post'
    const queryParams = { id: req.params.id, title: req.params.title }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
      return handle(req, res)
  })

  return server
}

module.exports = createServer()

// if (process.env.IN_LAMBDA) {
//   module.exports = createServer()
// } else {
//   app
//     .prepare()
//     .then(() => {
//       const server = createServer();
//       server.listen(port, (err) => {
//         if (err) throw err
//         console.log('> Ready on http://localhost:3000')
//       })
//     })
//     .catch((ex) => {
//       console.error(ex.stack)
//       process.exit(1)
//     })
// }
