import React from 'react';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Popover from '@mui/material/Popover';
import StatusCheck from './StatusCheck'

function Platform() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className='platFormName'>
      <div className='serviceWithIconss'>
        <div className='serviceWithIcons' onClick={handleClick}>
          <GroupWorkIcon className='icon' sx={{ fontSize: 40 }} color="disabled" />
          <div className='serviceName'>
            serviceName
          </div>
        </div>
        <div className='serviceWithIcons'>
          <GroupWorkIcon className='icon' sx={{ fontSize: 40 }} color="disabled" />
          <div className='serviceName'>
            serviceName
          </div>
        </div>
        <div className='serviceWithIcons'>
          <GroupWorkIcon className='icon' sx={{ fontSize: 40 }} color="disabled" />
          <div className='serviceName'>
            serviceName
          </div>
        </div>
        <div className='serviceWithIcons'>
          <GroupWorkIcon className='icon' sx={{ fontSize: 40 }} color="disabled" />
          <div className='serviceName'>
            serviceName
          </div>
        </div>
        <div className='serviceWithIcons'>
          <GroupWorkIcon className='icon' sx={{ fontSize: 40 }} color="disabled" />
          <div className='serviceName'>
            serviceName
          </div>
        </div>
        <div className='serviceWithIcons'>
          <GroupWorkIcon className='icon' sx={{ fontSize: 40 }} color="disabled" />
          <div className='serviceName'>
            serviceName
          </div>
        </div>
      </div>

      <Popover className='popoverstyles'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <StatusCheck></StatusCheck>
      </Popover>

    </div>

  );

}

export default Platform;