import schema from './schema';

export default {
  handler: `src/functions/hello/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
