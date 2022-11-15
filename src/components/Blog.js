import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';

export default function Blog({blog}) {
  return (
   <div className='blog-item'>
        <Card sx={{ width: 345, height: 410, display: "flex", flexDirection: "column",
    justifyContent: "space-between"}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={blog.thumbnail}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {blog.discipline}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{height: 100, overflow: "scroll"}}>
                By: {blog.author}
                <br></br>
                <br></br>
                {blog.description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" href={blog.link} target='_blank'>
            Read
            </Button>
        </CardActions>
        </Card>

    </div>
  );
}