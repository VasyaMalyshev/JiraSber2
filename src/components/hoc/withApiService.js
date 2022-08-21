import React from 'react';
import { ApiServiceConsumer } from "../api-service-context";

const withApiService = () =>  (Wrapped) => {

    return (props) => (
        <ApiServiceConsumer>
            {
                (apiService) => {
                    return (
                        <Wrapped {...props} apiService={apiService}/>
                    )
                }
            }
        </ApiServiceConsumer>
    );
}

export default withApiService;