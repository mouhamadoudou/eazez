import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({title, description, filepath}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#DCDCDC "}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={filepath}
          alt="exemple image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}