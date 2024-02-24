import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

function StatusCheck() {
  return (
    <div className='cordsStatus'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>amazon athena</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            query data in s3 using Sql
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="filledTonal" startIcon={<DeleteIcon />}>
            Approved
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>amazon athena</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            query data in s3 using Sql
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="filledTonal" startIcon={<DeleteIcon />}>
            Approved
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>amazon athena</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            query data in s3 using Sql
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="filledTonal" color="tertiary" startIcon={<DeleteIcon />}>
            Approved
          </Button>
          
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>amazon athena</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            query data in s3 using Sql
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="filledTonal" startIcon={<DeleteIcon />}>
            Approved
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>amazon athena</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            query data in s3 using Sql
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="filledTonal" startIcon={<DeleteIcon />}>
            Approved
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>amazon athena</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            query data in s3 using Sql
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="filledTonal" startIcon={<DeleteIcon />}>
            Approved
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default StatusCheck;