import { useCallback, useEffect, useState } from 'react';
import { useMoralis } from "react-moralis";
//import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import * as utils from '../blockchain/utils';

const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<any>(null);
  //const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);
  const { isWeb3Enabled } = useMoralis();

  const fetchDashboardData = useCallback(async () => {
    if (isWeb3Enabled) {
      try {
        const data = await utils.getDashboardData();
        setDashboardData(data);
        if ((window as any).debugMode)
          console.log("Dashboard Data:", data);
      } catch (e) {
        console.log(e);
        setDashboardData(null);
      }
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    fetchDashboardData();
    let refreshInterval = setInterval(fetchDashboardData, 10000);
    return () => clearInterval(refreshInterval);
  }, [fetchDashboardData]);

  return dashboardData;
}

export default useDashboardData;
