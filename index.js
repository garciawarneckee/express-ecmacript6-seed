import App from './App';

let port =  3000
let app = new App()

app.listen(port, () =>{
    console.log("The server has been setted up succesfully and listening on port " + port);
});
