import * as React from 'react';
import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@mui/material';

const drawerWidth = 200;

export default function ({ children, ...props }: any) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    function handleSignOut() {
        window.location.href = "login"
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color={"transparent"}
                sx={{
                    // zIndex: (theme) => theme.zIndex.drawer + 1,
                    boxShadow: 0,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar
                    style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >   
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>

                <Divider />
            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }} className={'test2'}>
                    <List>
                        <Link to={"account"} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem key={1} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Account"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to={"category"} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem key={1} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Category"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Drawer>
            <Drawer
                open
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }} className={'test2'}>
                    <List>
                        <Link to={"account"} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem key={1} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Account"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to={"category"} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem key={1} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Category"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}