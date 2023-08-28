import React, { useState, useEffect } from 'react';

const GitHubUserSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState(null);

  // Function to fetch GitHub users
  const fetchGitHubUsers = async () => {
    // You can use the GitHub API to fetch users here
    // Replace 'YOUR_API_ENDPOINT' with the actual GitHub API URL
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    setUsers(data); // Get the first 10 users
  };

  useEffect(() => {
    fetchGitHubUsers();
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the user with the matching login
    const user = users.find((u) => u.login === searchInput);
    if (user) {
      setSearchedUser(user);
    } else {
      setSearchedUser(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a GitHub user"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchedUser && (
        <div>
          <h2>Searched User:</h2>
          <img src={searchedUser.avatar_url} alt={searchedUser.login} />
          <p>{searchedUser.login}</p>
        </div>
      )}

      <h2>Top 10 GitHub Users:</h2>
      <ul className='users'>
        {users.map((user) => (
          <li key={user.id}>{user.login}
          <img src={user.avatar_url} alt={user.login} />
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default GitHubUserSearch;
