import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface BlogsProps {
    _id: string;
    __v: number;
    title: string;
    description: string;
    createDate: string;
    status: string;
}

const BlogsComponent = React.memo(() => {
    const [blogs, setBlogs] = useState<BlogsProps[]>([]);

    useEffect(() => {
        loadBlog();
    }, [])

    const loadBlog = async () => {
        try {
            const res = await axios.get('https://cors-anywhere.herokuapp.com/https://ben-trinh-api.herokuapp.com/blogs');
            return setBlogs(res.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    return (
        <div>
            <button onClick={loadBlog}>Test</button>
            {blogs.map(blog => (
                <div key={blog._id}>
                    {blog.title}
                </div>
            ))}
        </div>
    );
});

export default BlogsComponent;