const Userlist = () => {
   let  users = [ {id:1 , name :"Alice" , age : 25} , {id : 2 , name : "Bob" , age : 30} , { id : 3 , name : "charlie" , age : 35}];
   return (
    <div>{
    users.map((user) => (<ul key={user.id}><li><h1>Name : {user.name} </h1><h1>Age : {user.age}</h1></li></ul>) )};
    </div>
   );
}
export default Userlist;