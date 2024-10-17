import { useTheme, CssBaseline, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { ListItem, ListItemButton, ListItemIcon, useMediaQuery, List, Drawer, IconButton, Divider } from '@mui/material';
import { Route, useNavigate, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import Dashboard from './Dashboard';
import CreateProductForm from './CreateProductForm';
import ProductsTables from './ProductsTables';
import OrdersTable from './OrdersTable';
import CustomerTable from './CustomerTable';
import AdminDashboard from './Dashboard';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
    { name: "Add Product", path: "/admin/products/create", icon: <DashboardIcon /> },
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(isLargeScreen);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setSideBarVisible(!sideBarVisible);
    };

    const drawer = (
        <Box
            sx={{
                width: 240,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
            }}
        >
            <List>
                {menu.map((item, index) =>
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding onClick={() => navigate("/admin/account")}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="nav" sx={{ width: { lg: 240 }, flexShrink: 0 }}>
                {!isLargeScreen && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={{ mr: 2,px:2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Drawer
                    variant={isLargeScreen ? "permanent" : "temporary"}
                    open={isLargeScreen || sideBarVisible}
                    onCl ose={toggleDrawer}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { lg: `calc(100% - 240px)` },
                }}
            >
                <Routes>
                    <Route path='/' element={<AdminDashboard />} />
                    <Route path='/products/create' element={<CreateProductForm />} />
                    <Route path='/products' element={<ProductsTables />} />
                    <Route path='/orders' element={<OrdersTable />} />
                    <Route path='/customers' element={<CustomerTable />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default Admin;
