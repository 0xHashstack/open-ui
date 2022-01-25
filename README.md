
## Event Constants
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






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, to install dependencies you can run:

### `yarn`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
