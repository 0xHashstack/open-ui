import React from "react";
import useDashboardData from '../hooks/useDashboardData';

const DepositBalance = () => {

	const dashboardData = useDashboardData();

	return (
		<div className="col-xs-5 text-center">
			<label className="deposit">Deposit Balance</label>
			{dashboardData ? <div className="headline"><label>${dashboardData.reserveDeposit}</label></div>
				: <div className="headline headline--loading"></div>}
		</div>
	);
}

export default DepositBalance;