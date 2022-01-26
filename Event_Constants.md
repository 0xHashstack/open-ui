# Event Constants
```
- get Tokens
    event ConfirmTransaction1(address indexed sender, string message);
        emit ConfirmTransaction1(msg.sender,"User recieved 10,000 USDT.t");
    event ConfirmTransaction2(address indexed sender, string message);
        emit ConfirmTransaction2(msg.sender,"User recieved 10,000 USDC.t");
    event ConfirmTransaction3(address indexed sender, string message);
        emit ConfirmTransaction3(msg.sender,"User recieved 5 BTC.t");
    event ConfirmTransaction4(address indexed sender, string message);
        emit ConfirmTransaction4(msg.sender,"User recieved 100 wBNB.t");
        
- new deposit
We are not using createDeposit anymore

- add to deposit
event DepositAdded
emit DepositAdded(_sender, _market, _commitment, _amount);

- withdraw deposit
event Withdrawal(address indexed account, bytes32 indexed market, uint indexed amount, bytes32 commitment, uint timestamp);
emit Withdrawal(_account,_market, _amount, _commitment, block.timestamp);

- request loan
	event NewLoan(
		address indexed _account,
		bytes32 loanmarket,
		uint256 loanamount,
		bytes32 collateralmarket,
		uint256 collateralamount,
		uint256 indexed loanid
	);
emit NewLoan(_sender, _market, _loanAmount, _collateralMarket, _collateralAmount, ds.loanPassbook[_sender].loans.length+1);

- repay loan
	event LoanRepaid(
		address indexed _account,
		uint256 indexed id,
		bytes32 indexed market,
		uint256 timestamp
	);
		
emit LoanRepaid(_account, loan.id, loan.market, block.timestamp);

- withdraw loan
event WithdrawalProcessed(
		address indexed _account,
		uint256 indexed id,
		uint256 indexed amount,
		bytes32 market,
		uint256 timestamp
	);
emit WithdrawalProcessed(_sender, loan.id, _amount, loanState.currentMarket, block.timestamp);

- add collateral
event AddCollateral(
		address indexed _account,
		uint256 indexed id,
		uint256 amount,
		uint256 timestamp
	);
emit AddCollateral(_sender, loan.id, _collateralAmount, block.timestamp);

- withdraw collateral
event CollateralReleased(
		address indexed _account,
		uint256 indexed amount,
		bytes32 indexed market,
		uint256 timestamp
	);
emit CollateralReleased(_account, collateral.amount, collateral.market, block.timestamp);

- swap loan
event MarketSwapped(
		address indexed _account,
		uint256 indexed loanid,
		bytes32 marketFrom,
		bytes32 marketTo,
		uint256 amount
	);
emit MarketSwapped(_sender,loan.id,_market,_swapMarket, loan.amount);

- swap to loan
Calls swapToLoanProcess which has the event :
event MarketSwapped(
		address indexed _account,
		uint256 indexed loanid,
		bytes32 marketFrom,
		bytes32 marketTo,
		uint256 amount
	);
emit MarketSwapped(_account,loan.id,_swapMarket,_market,_swappedAmount);
        success = true;
```





