// ------------------------------------------------------------------------------------------

import './styles/globals.scss';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@material-tailwind/react';

import { APP_ROUTES } from './constants/appRoutes';
import Private from './layouts/Private/Private';
import Public from './layouts/Public/Public';
import Dashboard from './screens/private/Dashboard/Dashboard';
import Settings from './screens/private/Settings/Settings';
import SignIn from './screens/public/SignIn/SignIn';
import SignUp from './screens/public/SignUp/SignUp';

import type { FC, JSX } from 'react';

// ------------------------------------------------------------------------------------------

const App: FC = (): JSX.Element => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<Public />}>
						<Route
							path={APP_ROUTES.signIn()}
							element={<SignIn />}
						/>
						<Route
							path={APP_ROUTES.signUp()}
							element={<SignUp />}
						/>
					</Route>
					<Route element={<Private />}>
						<Route
							path={APP_ROUTES.dashboard()}
							element={<Dashboard />}
						/>
						<Route
							path={APP_ROUTES.settings()}
							element={<Settings />}
						/>
					</Route>
					<Route
						path={APP_ROUTES.all()}
						element={
							<Navigate
								to={APP_ROUTES.notFound()}
								replace
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

// ------------------------------------------------------------------------------------------

export default App;

// ------------------------------------------------------------------------------------------
