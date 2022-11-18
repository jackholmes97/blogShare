import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import {LinkedinShareButton, TwitterShareButton, FacebookShareButton} from 'react-share';
import {LinkedinIcon, TwitterIcon, FacebookIcon} from 'react-share';

export default function Blog({blog, views, setViews, handleViews}) {

    function updateViews() {
        const updateViewsObj = {
            views: blog.views + 1
        }
        fetch(`http://localhost:3000/blogs/${blog.id}`, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(updateViewsObj)
        })
        .then(response => response.json())
        .then(data => handleViews(data))
    }

  return (
   <div className='blog-item'>
        <Card sx={{ width: 345, height: 410, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={blog.thumbnail === "" ? "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" : blog.thumbnail} alt="green iguana" />
                <CardContent sx={{height:'26vh', overflow: "scroll"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {blog.discipline}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{height: 100}}>
                        By: {blog.author}
                        <br></br>
                        <br></br>
                        {blog.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={updateViews} size="small" color="primary" href={blog.link} target='_blank'>
                    Read
                </Button>
                <Typography variant="body2" color="text.secondary" sx={{align: 'inherit'}}>
                    {blog.views} views
                </Typography>
                <div className='share'>
                    <LinkedinShareButton className='icon' url={blog.link} title={blog.title} summary={blog.description} source={blog.link}> 
                        <LinkedinIcon size={30} round />
                    </LinkedinShareButton>
                    <TwitterShareButton className='icon' url={blog.link} title={blog.title}>
                        <TwitterIcon size={30} round />
                    </TwitterShareButton>
                    <FacebookShareButton className='icon' url={blog.link} quote={blog.title}>
                        <FacebookIcon size={30} round />
                    </FacebookShareButton>
                </div>
            </CardActions>
        </Card>
    </div>
  );
}