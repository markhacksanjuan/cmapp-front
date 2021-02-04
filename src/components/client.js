import React, { useState, useEffect } from 'react'
import clientService from '../services/clientService'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14,
        marginBottom: 5,
    },
    pos: {
        marginBottom: 3,
    },
    name: {
        marginBottom: 10,
    }
})


const Client = () => {
    const[clients, setClients] = useState('')

    
    useEffect(() => {
        const getResponse = async () => {
            const query = await clientService.getAllClients()
            setClients(query)
        } 
        getResponse()
    }, [])
    console.log(clients)
        
    const RenderClients = () => {
        const classes = useStyles()
        return clients.map((client, id) => {
            return(
                <Card className={classes.root} key={id} variant='outlined'>
                    <CardContent >
                        <Typography className={classes.title} color='textSecondary' gutterBottom>
                            Client {id}
                        </Typography>
                        <Typography variant='h5' component='h2' className={classes.name}>
                            Name: {client.name} {client.lastName}
                        </Typography>
                        <Typography className={classes.pos} color='textSecondary'>
                            Email: {client.email}
                        </Typography>
                        <Typography className={classes.pos} color='textSecondary'>
                            Company: {client.company}
                        </Typography>
                    </CardContent>
                </Card>
            )
        })
    }
    return(
        <div>
            <h2>CLIENT PAGE</h2>
            {clients && <RenderClients />}
        </div>
    )
}
export default Client
