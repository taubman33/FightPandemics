import React, { useState } from 'react';
import styled from "styled-components";

import { SearchBar } from 'antd-mobile';

import { mq } from "../../constants/theme";


const NearestHealthFacilities = props => {


  const ConfirmedCasesContainer = styled.div`
      background-color: #fff;
      border: 0.2px solid rgba(185, 185, 185, 0.5);
      padding: 3rem;
      margin-top: 4rem;
  `;

  const ConfirmedCasesContent = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 6rem;
      div:not(:last-child) {
        border-right: 1px solid #ccc;
      }
      div {
        padding: 0 5rem;
        h2 {
          font-weight: bold
        }
      }
      @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
        display: block;
        margin-top: 0;
        div:not(:last-child) {
          border-right: 0;
        }
        div {
          padding: 0 2rem;
        }
      }
  `;

  const SearchBarContainer = styled.div`
     width: 100%;
     @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
       display: none;
     }
  `

  const StyledSearchBar = styled(SearchBar)`
    &.am-search {
      width: 40%;
      background-color: #fff;
      border: 0.1rem solid rgba(0, 0, 0, 0.5);
      border-radius: 4rem;
    }
    .am-search-cancel-show {
      display: none;
     }
  `;

  const [ searchValue, setSearchValue ] = useState('');

  const onSearchInputChange = (value) => {
    setSearchValue(value);
  }
  const clearSearch = () => {
    setSearchValue('');
  }

  return (
        <ConfirmedCasesContainer>
             <SearchBarContainer>
               <StyledSearchBar
                 value={searchValue}
                 placeholder=""
                 onClear={clearSearch}
                 onChange={onSearchInputChange}
                />
             </SearchBarContainer>
             <ConfirmedCasesContent>
                <div>
                   <h2>420</h2>
                   <p>Confirmed cases in Miami</p>
                </div>
                <div>
                   <h2>2,051</h2>
                   <p>Confirmed cases in USA</p>
                </div>
                <div>
                   <h2>56,462</h2>
                   <p>Confirmed cases in World</p>
                </div>
             </ConfirmedCasesContent>
        </ConfirmedCasesContainer>
  )
}

export default NearestHealthFacilities;