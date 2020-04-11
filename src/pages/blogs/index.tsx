import React, { useEffect, useState } from 'react';
import axios from 'common/axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { BlogsProps } from 'common/type';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '20px 20px'
    },
});

const BlogsComponent = React.memo(() => {
    const classes = useStyles();
    const [blogs, setBlogs] = useState<BlogsProps[]>([]);

    useEffect(() => {
        loadBlog();
    }, [])

    const loadBlog = async () => {
        const res = await axios.get('/blogs');
        return setBlogs(res.data);
    }

    return (
        <div>
            {blogs.map(blog => (
                <Card key={blog._id} className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={`img${blog._id}`}
                            height="250"
                            image={blog.previewImgTop}
                            title="title"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {blog.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {blog.summary}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                            <Button size="small" color="primary">
                                Go go go
                            </Button>
                        </a>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
});

export default BlogsComponent;