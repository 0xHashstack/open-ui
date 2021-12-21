import {
    API_SUCCESS,
    API_FAIL,
    GET_TOP_SELLING_PRODUCT,
    GET_EARNING_DATA
} from "./actionType";

const INIT_STATE = {
    sellingData: [],
    earningChartData: []
};

const DashboardSaas = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_SUCCESS:
            switch (action.payload.actionType) {
                case GET_TOP_SELLING_PRODUCT:
                    return {
                        ...state,
                        sellingData: action.payload.data
                    };

                case GET_EARNING_DATA:
                    return {
                        ...state,
                        earningChartData: action.payload.data
                    };
                default:
                    return state;
            }
        case API_FAIL:
            switch (action.payload.actionType) {
                case GET_TOP_SELLING_PRODUCT:
                    return {
                        ...state,
                        sellingDataError: action.payload.error
                    };

                case GET_EARNING_DATA:
                    return {
                        ...state,
                        earningChartDataError: action.payload.error
                    };


                default:
                    return state;
            }
        default:
            return state;
    }
}


export default DashboardSaas;