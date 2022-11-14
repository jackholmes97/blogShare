import Blog from './Blog'
import {Grid} from '@mui/material'

export default function BlogList({blogs}) {

    return(
        <div className='blog-list'>
             <Grid
                container
                spacing={-1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {blogs.map((blog) => {
                    return <Blog key={blog.id} blog={blog} />
                })}
            </Grid>
        </div>
    )
}