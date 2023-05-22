import styled from "styled-components";
import {
  BeforeHeadCom1024px,
  BeforeHeadCom320px,
  BeforeHeadCom768px,
} from "../../ui-components";
import { useMediaQuery } from "react-responsive";
const HeaderComponent = ({
  handleSearch,
  handleInputChange,
  inputValue,
  navigate,
  dispatch,
  address,
  searchView,
  setSearchView,
}) => {
  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width:481px) and (max-width:991px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width:0px) and (max-width:480px)",
  });

  return (
    <Header>
      {isDesktop && (
        <BeforeHeadCom1024px
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          navigate={navigate}
          dispatch={dispatch}
          address={address}
        />
      )}
      {isTablet && (
        <BeforeHeadCom768px
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          navigate={navigate}
          dispatch={dispatch}
          address={address}
        />
      )}
      {isMobile && (
        <BeforeHeadCom320px
          searchView={searchView}
          setSearchView={setSearchView}
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          navigate={navigate}
          dispatch={dispatch}
          address={address}
        />
      )}
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gainsboro;
  padding: 13px 0px 13px 0px;
`;

const Menu = styled.div`
  display: flex;
  padding-top: 5px;
  font-weight: bold;
`;

const Chain = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`;
