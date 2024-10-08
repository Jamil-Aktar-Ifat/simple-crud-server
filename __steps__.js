/**
 * ----------------------------
 * Mongodb Connection
 * ----------------------------
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > Node > view full code
 * 5. change the password of the copied URL
 * ---------------------------
 * SERVER
 * ---------------------------
 * 1. CREATE --- POST
 * 2. app.post('/users' / async (req, res) => {})
 * 3. make the fuction async to use await inside it
 * 4. double check to use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 *----------------------------
 * CLIENT
 *----------------------------
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type' : 'application/json'}
 * 5. add body: JSON.Stringify(user) 
 */
