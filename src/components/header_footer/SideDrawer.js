import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ( props ) => {
    return (
        <Drawer
                anchor="left"
                open={props.open}
                onClose={() => props.onClose(false)}
            >
            
            <List 
                component="nav"
            >
                <ListItem button onClick={() => console.log("click")}>Event Starts In</ListItem>
                <ListItem button onClick={() => console.log("click")}>Venue Info</ListItem>
                <ListItem button onClick={() => console.log("click")}>Highlights</ListItem>
                <ListItem button onClick={() => console.log("click")}>Pricing</ListItem>
                <ListItem button onClick={() => console.log("click")}>Location</ListItem>
            </List>

        </Drawer>
    );
}

export default SideDrawer;