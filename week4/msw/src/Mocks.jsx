// src/mocks.js
import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.get(
    '/user',
    // Example of a response resolver that returns
    // a "Content-Type: application/json" response.
    (req, res, ctx) => {
      return res(
        ctx.json({
          firstName: 'John',
          age: 38,
        }),
      )
    },
  ),
)

worker.start()

export default worker