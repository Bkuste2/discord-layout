import styled from 'styled-components';
import { HiOutlineHashtag } from 'react-icons/hi'
import { IoPersonAdd } from 'react-icons/io5'
import { IoSettingsSharp } from 'react-icons/io5'

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;

  cursor:pointer;
  
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition:.2s;

  >div{
    display:flex;
    align-items:center;
  }

  >div span{
    margin-left: 5px;
    color: var(--senary);
  }

  .current{
    display:none;
  }

  &:hover, &:active{
    background-color:  var(--quinary);

    >div span{
      color: var(--white);
    }
    .current {
      display:block;
    }
  }
`;

export const HashTagIcon = styled(HiOutlineHashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(IoPersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(IoSettingsSharp)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  } 
`;
