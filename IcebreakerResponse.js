function IcebreakerResponse(email){
  this.email = email
}
IcebreakerResponse.BatchCreate(data) {
  return map.data(function(userEmail){
    return new IcebreakerResponse(userEmail)
  })

}
//
// function User(name, email){
// this.name = name
// this.email = email
// }
//
// User.BatchCreate = function(data){
// return data.map(function(userData){
// return new User(userData[0], userData[1])
// })
// }
