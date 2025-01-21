import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
const salesData = [
    {
        states: '24k',
        title: "sales",
        color: "primary",
        icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        states: '1.54k',
        title: "Customers",
        color: "success",
        icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        states: '12.5k',
        title: "Products",
        color: "warning",
        icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        states: '88k',
        title: "Revenue",
        color: "info",
        icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />
    },
]

const renderStats = () => {
    return salesData.map((item, index) =>
    (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display: "flex", alignItems: 'center'
            }}>
                <Avatar variant='rounded' sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "white",
                    background: `${item.color}`
                }}>
                    {item.icon}
                </Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.states}</Typography>

                </Box>
            </Box>
        </Grid>
    ))
}
const MonthlyOverview = () => {

    return (
        <div className='text-left'>
 <Card>
            <CardHeader title="Mouthly Overview"
                action={
                    <IconButton size='small'>
                        <MoreVert />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2'>
                        <Box component="span" sx={{ fontWeight: 600 ,mx:2}}>
                            Total 48.5% groth
                        </Box>
                        This mounth
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '.15px !important'
                    }
                }}
            />
            <CardContent sx={{
                pt: theme =>
                    `${theme.spacing(3)} !important`
            }}>
                <Grid container spacing={[5, 0]}>
                    {renderStats()}

                </Grid>
            </CardContent>

        </Card>
        </div>
       
    )
}

export default MonthlyOverview
