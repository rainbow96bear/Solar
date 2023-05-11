# SolarProject

## **23.04.03 ~ 23.05.22**

## :family: Members

- BackEnd(Leader) : [장정현](https://github.com/JJeonghyun)
- FrontEnd : [최원겸](https://github.com/HGWA333)
- Contract : [신상목](https://github.com/pippen11)
- BackEnd : [이재혁](https://github.com/LeeJaeHyekk)
- Contract : [김성진](https://github.com/rainbow96bear)
- FrontEnd : [고우석](https://github.com/Koh-U-Seok)

<br>

- Team Notion : [Solar](https://cubic-lute-8d9.notion.site/Solar-Project-0c507701ffb94eaaa6cfee118dca2dee)
- 이슈관리, 문서관리
  - [Google docs](https://drive.google.com/drive/folders/1b9ufoZdiu1xlUCZL6r3i2ogg93BuYYNQ)
  - [Trello](https://trello.com/b/jLBc46G8/team-project)
- 형상관리
  - [GitHub](https://github.com/JJeonghyun/SolarProject)

<br>

## :floppy_disk: Project Environment

<br>

- 빌드 환경
  - vscode
  - AWS

Front 환경 : reactjs

Back 환경 : express + typescript

Front 실행

```bash
cd front
npm start
```

back 실행

```bash
cd back
npm run start:dev
```

---

## :computer: Project Intro

<br>

- 새로운 탈중앙화 혁신의 한축인 Defi에는 Eth, bsc, polygon 등 많은 메인넷이 존재한다
- 각 메인넷들마다 Defi Dapp들이 존재하고 있다. 다만 너무 많은 Defi 사이트들이 있기에 사용자들 사이에서 더 좋은 APY, APR을 제공하는 곳을 찾기에는 많은 어려움이 발생한다
- 이에 우리들은 Dex Defi들의 API를 연동한 하나의 Dapp에서 통합적으로 Defi들은 Scan할 수 있는 사이트를 구축하여 메인넷별로 쉽게 관련 정보들은 찾을 수 있도록 한다
- 추가적으로 Defi를 연동함에 따라 Deposit, Withdraw, Claim, Auto-Compounding vaults 시 일정 수수료를 Scan사이트에 지불하게 함으로써 사이트 운영이 지속적으로 원활하게 운영이 가능
- Scan 사이트내에 자체 Token을 발행하여 Staking을 통한 보상을 Airdrop 해주는 기능으로 사용자들의 이용을 유도한다

 <br>

---

## :information_source: Project Purpose

<br>

- Defi Scan 사이트를 통해 사용자들이 수많은 Defi들을 통합하여서 편하게 필터링 할 수 있으며, 한 개의 사이트내에서 수많은 메인넷들의 Defi들을 비교해 볼 수 있기에 편리해진다
- Auto-Compounding vaults 기능으로 수동으로 Claim을 한 후에 다시 Deposit을 하지 않아도 됨으로 굉장히 편리해진다
- 또한 트랜잭션이 일어날 때 마다 일정량의 Scan사이트에서 자체 발행한 Token을 Airdrop 해줌으로써 적절한 보상이 이루어질 수 있다

<br>

---

## :satellite: Project Main Function

- 메타마스크 등 사용자들의 사용 빈도가 높은 다양한 지갑들의 Connect Wallet 기능(모바일에서도 원활한 작동이 가능하게 작업하는게 중요)
  - 클레이튼은 Kaikas Wallet의 점유율이 높으므로 연동 필요
- Defi API 연동에서 제공하는 연동/프로토 타입이므로 Fress로 진행 가능
- Staking 기능 APY, APR을 유동성 pool의 상황에 맞춰서 유동적으로 변경되게 하며 Scan 사이트에서 발행한 Token Airdrop 기능
- Defi에 사용자가 Deposit, Withdraw, Claim을 할 때 일정 수수료가 지정된 Wallet으로 지불되는 기능과 일정한 Token이 사용자에게 Airdrop되는 기능
- 메인넷 별 Deif 상품들에 대한 필터링 기능
- 이외 부가적인 기능들 필요

<br>

---

<br>

| 기능 항목                    | 참고                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wallet Connect 기능          | 회원가입 기능 필요 없음. 탈중앙화의 취지에 맞게 USER들의 Wallet Connet 를 통해 사용 가능                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 메인넷 선택 기능             | 많은 메인넷들의 썸네일들이 있고 그중 원하는 메인넷을 선택하면 해당 메인넷의 Defi 상품들중 LTV가 높은 순으로 기본 정렬.                                                                                                                                                                                                                                                                                                                                                                                            |
| Defi 상품 정렬 기능          | 메인넷 선택후 나오는 기본 정렬(LTV순서로 기본 정렬)APY또는APR높은순  정렬 기능정렬된 리스트 위에 DEX별 썸네일이 나오고 클릭하면 DEX별로 필터 기능 토큰명 검색기능(토큰 주소를 통해서도 검색 가능해야 함.) 등                                                                                                                                                                                                                                                                                                      |
| Auto-compounding vaults 기능 | 자동 재복리 기능                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Smart Contract               | Api를 통해 연결된 Defi 상품에 대해 Deposit을 하면 해당 pool의 스마트컨트랙을 불러오기 전에 scan 사이트의 스마트 컨트랙상에서 수수료 지불(지정된 Wallet으로 자동 전송)에 대한 컨트랙을 approve한 후 api를 통해 해당 pool의 스마트 컨트랙 진행 (Withdraw, Claim, Auto-compounding vaults 동일하게 처리)과 DFS 의 Airdrop 을 처리하는 스마트 컨트랙 .\*주의: 기본적으로 deposit을 할 때 Auto-compounding vaults 기능은 작동되게 설정해놓고 USER가 미작동을 선택하면 이에 대한 스마트 컨트랙은 진행되지 않게 해야 함. |
| Token 발행 관련              | 테스트넷용 Token은 직접 발행<br> 메인넷용 BEP20 Token은 발행(토큰명: Defiscan , 심볼: DFS )하여 제공 예정.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Staking and Swap             | DFS/USDT , DFS/ETH , DFS/BNB 3개의 pair로 LP(liquidity pool)토큰을 생성하여 이를 통해 DFS Airdrop과 Swap 시 나오는 수수료를 USER에게 제공 등                                                                                                                                                                                                                                                                                                                                                                      |

<br>

---

<br>

## :trollface: Project Stack

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/><img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"/><img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/><img src="https://img.shields.io/badge/mySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/><img src="https://img.shields.io/badge/git-F05032?style=flat&logo=Git&logoColor=white"/><img src="https://img.shields.io/badge/solidity-363636?style=flat&logo=solidity&logoColor=white"/><img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white"/><img src="https://img.shields.io/badge/amazonaws-232F3E?style=flat&logo=amazonaws&logoColor=white"/><img src="https://img.shields.io/badge/web3.js-F16822?style=flat&logo=web3.js&logoColor=white"/><img src="https://img.shields.io/badge/remix-000000?style=flat&logo=remix&logoColor=white"/><img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white"/><img src="https://img.shields.io/badge/trello-0052CC?style=flat&logo=trello&logoColor=white"/><img src="https://img.shields.io/badge/awsamplify-FF9900?style=flat&logo=awsamplify&logoColor=white"/><img src="https://img.shields.io/badge/notion-000000?style=flat&logo=notion&logoColor=white"/><img src="https://img.shields.io/badge/googlesheets-34A853?style=flat&logo=googlesheets&logoColor=white"/>

- Solidity(Smart Contract)
- AWS(EC2 (싱가폴 리전))
- React(Dapp Front-end UI 프레임워크)
- Axios(실시간 데이터 반영)
- Nodejs (Dapp Back-end JS 프레임워크)
- Web3.js (Metamask 등의 사용 빈도 높은 Wallet 연동)
- Truffle(Smart Contract and Build)
- EVM - Solidity를 위한 가상머신
- Metamask, Connect Wallet, Kaikas 등 지갑 활용

<br>

## :memo: Project Result

1. 메인넷별 Defi Scan 사이트
2. Defi 상품 이용시 수수료 처리 및 인센티브로 사용자들에게 DFS Airdrop 기능
3. 자체 토큰인 DFS의 Staking(3 가지 pair로 구성) and Airdrop 기능
4. 3 번의 스테이킹된 LP를 이용한 Swap 기능
