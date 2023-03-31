

// error-handling middleware function
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(300).send('Something broke!')
//   })
const errorHandler = (err, req, res, next)=>{
  const statusCode = res.statusCode ? res.statusCode : 500
  res.status(statusCode)

  res.json({
    message : err.message,
    stack : process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

module.exports = {errorHandler}