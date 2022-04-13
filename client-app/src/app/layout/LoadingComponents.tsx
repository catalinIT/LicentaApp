import React from 'react';
import { Grid } from 'react-loader-spinner';


export default function LoadingComponent() {
    return (
        <>
            <div className='center'>
                <Grid ariaLabel="loading-indicator" color='gold' />
            </div>
            <div className='belowCenter'>
                <span>Gathering our lies...</span>
            </div>
        </>
    )
}