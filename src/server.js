const {createServer} =  require('http');
const {parse} = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'

const port = process.env.INSIGHT_MESH_SERVER || 3000

const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(()=> {
    createServer((req, res)=> {
        const parsedUrl = parse(req.url,true);
        const {pathname, query} = parsedUrl
        if(pathname === '/') {
            app.render(req, res, '/', query)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})


