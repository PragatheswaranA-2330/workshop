async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    console.log("First user:",users[0].name);
    console.log("Second user:",users[1].name);
    console.log("Third user:",users[2].name);
}

fetchUsers();