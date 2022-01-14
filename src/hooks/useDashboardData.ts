import { useCallback, useEffect, useState, useContext } from 'react';
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import * as utils from '../blockchain/utils';

const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

  const fetchDashboardData = useCallback(async () => {
    try {
      const data = await utils.getDashboardData();
      setDashboardData(data);
      if (window){
        console.log("Dashboard Data:", data);
      }
        
    } catch (e) {
      console.log(e);
      setDashboardData(null);
    }
  }, [wrapper]);

  useEffect(() => {
    fetchDashboardData();
    let refreshInterval = setInterval(fetchDashboardData, 10000);
    return () => clearInterval(refreshInterval);
  }, [fetchDashboardData]);

  return dashboardData;
}

export default useDashboardData;
