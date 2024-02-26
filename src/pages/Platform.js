import React from 'react';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import StatusCheck from './StatusCheck'
import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

function Platform() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

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
          <GroupWorkIcon className='icon' sx={{ fontSize: 40 }} color="disabled" onClick={handleClick} />
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
       <div ref={ref}>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={130}
      >
        <Popover id="popover-contained">
          <Popover.Body>
          <StatusCheck></StatusCheck>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>

    </div>

  );

}

export default Platform;