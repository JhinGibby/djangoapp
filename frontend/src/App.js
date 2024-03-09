import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from './theme'; // Import your custom theme
import HomePage from './HomePage';
import ItemList from './ItemList';

function App() {
    return (
        <ThemeProvider theme={theme}> {/* Use ThemeProvider here */}
            <div className="App">
                <header className="App-header">
                    <HomePage />
                    <ItemList />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;

