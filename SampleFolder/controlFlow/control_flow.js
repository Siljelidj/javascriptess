let userRole = "admin";
let acessLevel;

if (userRole === "admin") {
    acessLevel = "Full acess granted";
}else if (userRole === "manager") {
    acessLevel = ("Limited acess granted");
}else {
    acessLevel = ("No acess granted");
}
console.log("Access Level:", accessLevel);
