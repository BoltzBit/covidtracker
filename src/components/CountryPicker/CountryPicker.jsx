import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl }from '@material-ui/core';

import { countries } from '../../api';
import styles from './CountryPicker.module.css';


const CountryPicker = () => {
    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchedCountries = async () => {
            setFetchedCountries(await countries);
        }

        fetchedCountries();
    },[setFetchedCountries]);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;
