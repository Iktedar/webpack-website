import React, { useEffect, useState } from 'react';


export const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(!posts.length) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: {
                    userId: 11,
                    title: "Test Post",
                    body: "This is test body"
                }
            })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((json) => setPosts(json))
        }
    }, []);

    return (
        <div>
            <h2>My Posts</h2>
            {posts.length && (
                <ul>
                    { posts.map((post) => <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            )}
        </div>
      );
}