import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from '../api/ApiHandler';

const SessionDataContext = createContext({
    sessionData: {},
    updateSessionData: () => {},
    clearSessionData: () => {}  
});

export const useSessionData = () => {
    return useContext(SessionDataContext);
};

export const SessionDataProvider = ({ children }) => {
    const [sessionData, setSessionData] = useState({ currentLanguage: "de" });
    const [isLoading, setIsLoading] = useState(true);
    const useMockedData = true; 
    useEffect(() => {
        const loadSessionData = async () => {
            setIsLoading(true);
            try {
                let data;
                if (useMockedData) {
                    // Attempt to load from AsyncStorage first
                    const storedData = await AsyncStorage.getItem('sessionData');
                    if (storedData) {
                        data = JSON.parse(storedData);
                    } else {
                        // Fallback to mocked data if nothing is stored
                        data = { currentLanguage: "de", user: "Mock User" }; // Mocked data
                        await AsyncStorage.setItem('sessionData', JSON.stringify(data));
                    }
                } else {
                      data = await get('/sessionData'); 
                }

                if (data) {
                    setSessionData(data);
                }
            } catch (error) {
                console.error("Error loading session data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadSessionData();
      
    }, []);
    
    const updateSessionData = async (newData) => {
        console.log("Updating session data with:", newData);
        console.trace();
        try {
            const mergedData = { ...sessionData, ...newData };
            setSessionData(mergedData);
            await AsyncStorage.setItem('sessionData', JSON.stringify(mergedData));
        } catch (error) {
            console.error("Error updating session data:", error);
        }
    };

    const clearSessionData = async () => {
        console.trace("Clearing session data");
        try {
            await AsyncStorage.clear();  
            setSessionData({});  
            console.log("Session data cleared successfully");
        } catch (error) {
            console.error("Error clearing session data:", error);
        }
    };

    return (
        <SessionDataContext.Provider value={{ sessionData, updateSessionData, clearSessionData }}>
            {children}
        </SessionDataContext.Provider>
    );
};
