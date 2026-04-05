let user = {
    name: "Alice",
    role: "admin",
    isActive: true,
    permissions: []
};

// Using if/else
if (user.isActive) {
    if (user.role === "admin") {
        user.permissions = ["read", "write", "delete", "manage_users"];
        console.log(`Welcome Admin ${user.name}! You have full access`);
    } else if (user.role === "editor") {
        user.permissions = ["read", "write"];
        console.log(`Welcome Editor ${user.name}! You can edit content`);
    } else if (user.role === "viewer") {
        user.permissions = ["read"];
        console.log(`Welcome ${user.name}! You can view content`);
    } else {
        console.log("Invalid role");
    }
} else {
    console.log("Account is deactivated. Contact support.");
}

// Using switch (cleaner for multiple specific values)
switch(user.role) {
    case "admin":
        user.permissions = ["read", "write", "delete", "manage_users"];
        console.log(`Admin access granted to ${user.name}`);
        break;
    case "editor":
        user.permissions = ["read", "write"];
        console.log(`Editor access granted to ${user.name}`);
        break;
    case "viewer":
        user.permissions = ["read"];
        console.log(`Viewer access granted to ${user.name}`);
        break;
    default:
        console.log("Unknown role");
}