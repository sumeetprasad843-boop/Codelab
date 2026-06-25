import express from 'express';
import path from 'path';

const app = express();
const absolutePath = path.resolve('/view')
app.get('/', (req, res) => {
    const abspath=path.resolve('view/home.html');
    res.sendFile(abspath);
});

app.get('/login',(req, res) => {
    const abspath=path.resolve('view/login.html');
    res.sendFile(abspath);
});
app.get('/contact',(req, res) => {
    const abspath=path.resolve('view/contact.html');
    res.sendFile(abspath);
});
app.get('/about',(req, res) => {
    const abspath=path.resolve('view/about.html');
    res.sendFile(abspath);
});
//app.get('/about',(req, res) => {
  //  const abspath=path.resolve('view/about.html');
//     res.sendFile(abspath);
// });
app.get('/services',(req, res) => {
    const abspath=path.resolve('view/service.html');
    res.sendFile(abspath);
});


app.get('/login', (req, res) => {
    res.sendFile(path.resolve('view/login.html'));
});



app.get('/search', (req, res) => {
    res.sendFile(path.resolve('view/search.html'));
});
app.get('/Register', (req, res) => {
    res.sendFile(path.resolve('view/register.html'));
});
app.get('/cart', (req, res) => {
    res.sendFile(path.resolve('view/cart.html'));
});


app.use((req, res) => {
    const abspath=path.resolve('view/404.html');
    res.status(404).sendFile(abspath);
});




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});