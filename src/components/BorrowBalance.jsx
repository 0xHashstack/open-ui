import React from "react";
import useDashboardData from '../hooks/useDashboardData';

const BorrowBalance = () => {

	const dashboardData = useDashboardData();

	return (
		<div className="col-xs-5 text-center">
			<label className="borrow">Borrow Balance</label>
			{dashboardData ? <div className="headline"><label>${dashboardData.reserveLoan}</label></div>
				: <div className="headline headline--loading"></div>}
		</div>
	);
}

export default BorrowBalance;