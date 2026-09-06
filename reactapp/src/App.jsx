function UserGreeting() {
    const isLoggedIn = true;

    if (isLoggedIn) {
        return <p>Welcome User</p>;
    }

    return <p>Please Login</p>;
}

export default UserGreeting;