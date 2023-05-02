import { Divider } from "@aws-amplify/ui-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { connectThunk } from "../modules/connect";
import { logout } from "../api";
import { accountThunk } from "../modules/account";
import { loginThunk } from "../modules/login";
import styled from "styled-components";

const LoggedinUser = () => {
  const [view, setView] = useState(false);
  const account = useSelector((state) => state.account.account.account);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    setView(false);
  }, [pathname]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (view && ref.current && !ref.current.contains(e.target)) {
        setView(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [view]);

  const logoutMethod = () => {
    logout(document.cookie.split(":")[0], account);

    dispatch(connectThunk({ connect: false }));
    dispatch(loginThunk({ false: false }));
    dispatch(accountThunk({ account: "" }));
    navigate("/");
  };

  return (
    <LoggedinUserCover ref={ref}>
      <svg
        className="asdf"
        onClick={() => {
          setView(!view);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        viewBox="0 0 448 512"
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg>
      {view && (
        <MenuDropDown>
          <ul>
            <li>
              <Link to={`/mypage?${account}`}>
                <div>My Page</div>
              </Link>
            </li>

            <Divider></Divider>
            <li>
              <div
                onClick={() => {
                  logoutMethod();
                }}
              >
                Logout
              </div>
            </li>
          </ul>
        </MenuDropDown>
      )}
    </LoggedinUserCover>
  );
};
export default LoggedinUser;

const LoggedinUserCover = styled.div`
  //   width: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  position: relative;
  z-index: 10000;
`;

const MenuDropDown = styled.div`
  border: 1px solid gainsboro;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  //   left: 95px;
  right: 0px;
  width: 200px;
  background: white;
  z-index: 100;
  opacity: 0.99;

  ul {
    list-style: none;
    padding-inline-start: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 20px;
    display: flex;
    flex-direction: column;

    li {
      font-size: 20px;

      .afterheader_dropdown_account {
        width: 100%;
        padding-left: 5px;
        padding-right: 5px;
        background: gainsboro;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        border-radius: 15px;
      }

      a {
        color: black;
        text-decoration: none;
      }

      .logoutButton {
        margin-top: 10px;
        border-radius: 30px;
        width: 100%;
        background: black;
        color: white;
      }
    }
  }
`;
