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

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
