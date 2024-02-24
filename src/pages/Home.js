import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TabsData } from '../components/SidebarData';
import Platform from './Platform';
import StatusCheck from './StatusCheck'
function Home() {

  const [age, setAge] = React.useState('10');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='home'>
      <h3>Aws Service</h3>
      <div className='display'>
        <div className='family-flex'>
          <div className='family'>Family</div>
          <FormControl className='width' size="small">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='family-flex'>
          <div className='family'>SortBy</div>
          <FormControl className='width' size="small">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={1}>All</MenuItem>
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='tab'>

        <Tabs value={value} onChange={handleChange1} aria-label="icon label tabs example">
          {TabsData.map((item, index) => {
            return (
              <Tab key={index} icon={item.icon} label={item.title} />
            );
          })}
        </Tabs>
        {value === 0 && (
          <Platform />
        )}
        {value === 1 && (
          <StatusCheck />
        )}

        
      </div>

    </div>
  );
}

export default Home;
