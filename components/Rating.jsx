import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
    className='container_rating'
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
        <div className="rating">
            <Typography component="legend">Rating:
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        />
      </Typography>
       
        <Button color='secondary' style={{marginTop: "10px"}} variant="contained">Rating now!</Button>
       </div>
      
      </Box>
    );
}