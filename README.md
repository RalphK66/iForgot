## Setup

1. Add `.env` file to the main project folder
2. Inside your `.env` file, paste this line `SESSION_SECRET=secret`
3. Save changes
4. Install Modules
    - `npm init`
    - `npm i express ejs`
    - `npm i --save-dev nodemon dotenv`
    - `npm i bcrypt`
    - `npm i passport passport-local express-session express-flash`

## Run

1. `npm run devStart`
2. go to `localhost:3000` in your browser


## Detailed Explanation

1. `npm init` 

2. `npm i express ejs`

3. `npm --save-dev nodemon dotenv`

4. create `.env` file 

5. create `.gitignore` file

6. inside the `package.json` file, create:

   `"devStart": "nodemon server.js"` 

   as the value for the `"scripts"` key.

7. create your server file and name it `server.js`

8. inside `server.js` we want to import `express` and set up basic a route to our homepage, which will render a file named `index.ejs` 

9. create a folder named **views** and then create that `index.ejs` file inside of it.

10. before we continue, we want to make sure that we tell our server that we are using `ejs` syntax. We do this by setting the view engine to `ejs` (which is a JavaScript-embedded html template). For example:

    ```javascript
    const express = require('express');
    const app = express();
    
    // 10.	set view engine
    app.set('view-engine', 'ejs');
    
    app.get('/',(req,res) => {
        res.render('index.ejs');
    });
    
    app.listen(3000);
    ```

11. create routes we need for our **login page ** and our **register page**. So, inside views create `register.ejs` and `login.ejs`

12. inside `server.js` create a route for each page.

13. ```js
    const express = require('express');
    const app = express();
    
    app.set('view-engine', 'ejs');
    
    app.get('/',(req,res) => {
        res.render('index.ejs');
    });
    
    // 12. add route
    app.get('/register',(req,res) => {
        res.render('register.ejs');
    });
    
    // 12. add route
    app.get('/login',(req,res) => {
        res.render('login.ejs');
    });
    
    app.listen(3000);
    ```

14. create the form label/input for name, email, and password in `register.ejs` .Make sure that the attributes `for`,  `id`, and `name` all have the same value. Also, make sure to include a `required` attribute in every `input` tag

15. repeat step 14 to create a `login.ejs` file, except refactor the code to match the requirements for **login**

16. include a `href`'s in both pages that will point to each other

17. most importantly, our form's `method` attribute should have the value `POST`:

    #### **`register.ejs`**

    ```ejs
    <h1>Register</h1>
    <form action="/register" method="POST">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Register</button>
    </form> 
    <a href="/login">Login</a>
    ```

    #### **`login.ejs`**

    ```ejs
    <h1>Login</h1>
    <form action="/login" method="POST">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <a href="/register">Register</a>
    ```

18. go back into our `server.js` file and implement our post methods for `login.ejs` and `register.ejs`

19. we want to include this line of code: 

    ```js
    app.use(express.urlencoded({extended: false)})
    ```

    This tells our application that we want to access the forms we created inside `register.ejs` and `login.ejs` by using our request variable: `req` inside our post methods.

20. our post methods would be as follows:

    ```js
    const express = require('express')
    const app = express()
    
    app.set('view-engine', 'ejs');
    // 19. set extended as false 
    app.use(express.urlencoded({ extended: false }));
    
    app.get('/',(req, res) => {
      res.render('index.ejs');
    });
    
    app.get('/login', (req, res) => {
      res.render('login.ejs')
    });
    
    app.post('/login',(req,res) => {  
    });
    
    app.get('/register',(req, res) => {
      res.render('register.ejs')
    });
    
    app.post('/register',(req,res) => {   
    });
    
    app.listen(3000)
    ```

21. create an array to hold users for simplicity

22. When our users register and create a password, we want to make sure that we can hash it and compare it against other hashed passwords. We will download the `bcrypt` library and import/initialize it inside our `server.js` file.

    

    `npm i bcrypt`

    ​	

23. ```js
    const express = require('express')
    const app = express()
    // 21. array to hold our users
    const users = []
    
    app.set('view-engine', 'ejs');
    // 19. set extended as false 
    app.use(express.urlencoded({ extended: false }));
    
    app.get('/',(req, res) => {
      res.render('index.ejs');
    });
    
    app.get('/login', (req, res) => {
      res.render('login.ejs')
    });
    
    app.post('/login',(req,res) => {  
    });
    
    app.get('/register',(req, res) => {
      res.render('register.ejs')
    });
    
    app.post('/register', checkNotAuthenticated, async (req, res) => {
      try {
          /* create a hashed password. The value 10 refers to the number of times we want to generate a hash */
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        // add user to users array
        users.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        })
        // 
        res.redirect('/login')
      } catch {
          /* 
        if register fails, redirect back to '/register' 	*/
        res.redirect('/register')
      }
    })
    
    app.listen(3000)
    ```

24. 
