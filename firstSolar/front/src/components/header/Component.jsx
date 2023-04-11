import styled from "styled-components";
import {
  ChainChange,
  ChainIcon,
  ConnectButton,
  ConnectModal,
  LoginAccount,
  LogoTitle,
  Menu1,
} from "../../ui-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  // 변수
  const connect = useSelector((state) => state.connect.connect.connect);
  const account = useSelector((state) => state.account.account.account);

  return (
    <Header>
      <div className="Header_innerBox">
        <div className="Header_left">
          <Link>
            <LogoTitle />
          </Link>
          <Menu>
            <Menu1 />
          </Menu>
        </div>
        <div className="Header_right">
          <Chain onMouseOver={() => {}}>
            <ChainIcon></ChainIcon>
            <ChainChange></ChainChange>
          </Chain>
          {connect ? (
            // connect 버튼을 눌렀는지 물어본다.

            document.cookie ? (
              // 지금은 백에 쿠키 발급 기능이 없어서 document.cookie로 판별할 수 없다.

              // account ? (
              // 전자지갑과 연결이 되어 있는지 확인한다.

              //  전자지갑과 연결을 하는 버튼을 눌렀고 어떤 전자지갑과 연결할 것인지도 선택하였으며 정상적으로 연결이 된 상태다.
              //  드롭다운이 가능한 내 지갑에 대한 간략한 정보
              //현재 두번 클릭해야 되는 문제가 있으나 이건 임시로 state 변수를 이용했기에 발생하는 문제이며, document.cookie로 조건을 변경하면 해결될 듯하다.
              <LoginAccount></LoginAccount>
            ) : (
              <>
                <ConnectModal></ConnectModal>
                <div className="Header_connect">
                  <ConnectButton></ConnectButton>
                </div>
              </>
              // 전자지갑과 연결을 하는 버튼을 눌렀지만 아직 어떤 전자지갑과 연결할 것인지 선택하지 않은 상태입니다.
              //  전자지갑 연결 모달이 뜬 상태에는 관련 표시를 해줄 것입니다. 예를 들어, 무한 빙글빙글
            )
          ) : (
            // connect 버튼을 누르지 않은 상태입니다.
            <div className="Header_connect">
              <ConnectButton></ConnectButton>
            </div>
          )}
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gainsboro;

  .Header_innerBox {
    width: 1400px;
    display: flex;
    justify-content: space-between;

    .Header_left {
      display: flex;
      a {
        text-decoration-line: none;
      }
    }

    .Header_right {
      display: flex;

      .Header_right_chain {
        display: flex;
      }
    }
  }
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
