import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor:'#fff',
    borderRadius:2,
    marginRight: theme.spacing(2),
    marginLeft: 10,
    marginBottom:4,
    width: '40%',
    minHeight:5,
    padding:4,
  }));


  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 57,2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'blue',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    paddingLeft:10,
    width:'100%',
    color:'#878787',
    fontSize:12,
  }));
 

const search = () => {
   
    return (
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="search for products, brand and more"
                />
          </Search>
       
    )
}

export default search
