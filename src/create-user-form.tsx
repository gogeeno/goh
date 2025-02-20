import React, { useState } from "react";

const CreateUserForm: React.FC = () => {
  // Պահում ենք անունը, գաղտնաբառը և սխալները
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // API հասցեն
  const API_URL = "https://api.challenge.hennge.com/password-validation-challenge-api/001/challenge-signup";

  // Գաղտնաբառի վավերացման կանոններ
  const validatePassword = (password: string): string | null => {
    if (password.length < 10) return "Password must be at least 10 characters long";
    if (password.length > 24) return "Password must be at most 24 characters long";
    if (/\s/.test(password)) return "Password cannot contain spaces";
    if (!/\d/.test(password)) return "Password must contain at least one number";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    return null; // Եթե բոլոր պայմանները բավարարված են
  };

  // Ֆորմայի ուղարկման ֆունկցիա
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Կանխում է էջի վերալիցքավորումը
    setError(null);
    setSuccess(false);

    // Վավերացում (client-side)
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      // API-ին ուղարկվող տվյալները
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_AUTH_TOKEN", // Փոխարինիր քո հեղինակացմամբ
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Հաջողություն
      if (response.ok) {
        setSuccess(true);
      } 
      // Հատուկ սխալներ API-ից
      else if (response.status === 400 && data.message.includes("password is not allowed")) {
        setError("Sorry, the entered password is not allowed, please try a different one.");
      } 
      else if (response.status === 401 || response.status === 403) {
        setError("Not authenticated to access this resource.");
      } 
      else {
        setError("Something went wrong, please try again.");
      }
    } catch (error) {
      setError("Something went wrong, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-user-form">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">User was successfully created!</p>}

      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
