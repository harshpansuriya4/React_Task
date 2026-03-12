import { useState, useEffect } from "react";
import "../styles/profile.css";

export default function Profile() {

    const [showPassword, setShowPassword] = useState(false);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {

        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (storedUser) {
            setUser(storedUser);
        }

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSave = (e) => {
        e.preventDefault();

        // get all users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // update the correct user
        users = users.map((u) => {
            if (u.email === user.email) {
                return user;
            }
            return u;
        });

        // save updated users list
        localStorage.setItem("users", JSON.stringify(users));

        // update logged in user
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert("Profile Updated Successfully");
    };

    return (

        <div className="profile-container">

            <div className="profile-card">

                <h2>User Profile</h2>

                <form onSubmit={handleSave}>

                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />

                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />

                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />

                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                    </button>

                    <button type="submit">
                        Save Changes
                    </button>

                </form>

            </div>

        </div>

    );
}