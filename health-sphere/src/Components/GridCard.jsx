import { ArrowDropDownCircleOutlined, Delete } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const GridCard = ({note}) => {
  return (
    <>
      <Grid container spacing={3} sx={{marginTop:"20px"}}>
        {
            note.map((data)=>(
                <Grid key={data.id} item sm={12} md={4}>
            <Card elevation={1}>
                <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} >
                        R
                    </Avatar>
                }
                action={
                    <IconButton>
                        <Delete/>
                    </IconButton>
                }
                title={data.title}
                subheader={data.category}
                />
                <CardMedia
                    component="img"
                    height="200"
                    image={data.image}
                />
                <CardContent>
                    <Typography>{data.content}</Typography>
                </CardContent>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography>
                            More information
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facere fugiat quae cum a quod eum iste quasi animi vero.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Card>
        </Grid>
            ))
        }
      </Grid>
    </>
  )
}

export default GridCard
