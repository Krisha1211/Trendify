import React, { useEffect, useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shippedOrder } from '../../State/Admin/Order/Action';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Card, CardHeader, Button, AvatarGroup, Menu, MenuItem } from '@mui/material';

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector(store => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch, adminOrder.placed, adminOrder.shipped, adminOrder.confirmed, adminOrder.delivered]);

  console.log("admin orders ", adminOrder);

  const handleShippedOrder = (orderId) => {
    dispatch(shippedOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    handleClose();
  };

  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const getOrdersArray = (orders) => {
    if (!orders) {
      return [];
    }
    if (Array.isArray(orders)) {
      return orders;
    }
    console.error("Expected orders to be an array, but got:", orders);
    return [];
  };

  const ordersArray = getOrdersArray(adminOrder.orders);

  return (
    <div className='p-2'>
      <Card className='mt-2'>
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersArray.map((item, index) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <AvatarGroup max={2} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) =>
                        <Avatar key={orderItem.id} src={orderItem.product.imgeUrl} />)}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left">
                    {item.orderItems.map((orderItem) =>
                      <p key={orderItem.id}>{orderItem.product.title}</p>)}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full
                        ${item.orderStatus === "CONFIRMED" ? "bg-[green]" :
                          item.orderStatus === "SHIPPED" ? "bg-[blue]" :
                            item.orderStatus === "PLACED" ? "bg-[gray]" :
                              item.orderStatus === "PENDING" ? "bg-[blue]" :
                                "bg-[red]"
                      }`}
                    >{item.orderStatus}</span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                      onClick={(event) => handleClick(event, index)}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item.id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item.id)}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handleDeleteOrder(item.id)} variant='outlined'>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}

export default OrdersTable;
