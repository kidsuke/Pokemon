import React from 'react';
import { Provider } from 'react-redux'
import RootNavigation from "./navigators/RootNavigator"
import store from "./Store"

const App = () => (
    // Expose the Redux store to children using react-redux's Provider.
    // Now all children can use react-redux's higher-order component connect() to access the store.
    <Provider store={store}>
        <RootNavigation/>
    </Provider>
)

export default App