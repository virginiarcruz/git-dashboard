import { createContext } from 'react';
import { AppContextInterface } from '../interfaces/PullRequests';

const AppContext = createContext<AppContextInterface>({});

export default AppContext;
