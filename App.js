import { StyleSheet, View, Platform, Switch } from 'react-native';
import Constants from 'expo-constants'
import { NativeRouter, Route, Routes } from 'react-router-native';
import Layout from './src/components/Layout';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';

const STATUSBAR_HEIGHT = Constants.statusBarHeight

export default function App() {
	return (
		<NativeRouter>
			<Routes>
				<Route path='/' Component={() => <Layout Comp={Home} />}/>
				<Route path='/login' Component={() => <Layout Comp={Login} />}/>
				<Route path='/register' Component={() => <Layout Comp={Register} />}/>
			</Routes>
		</NativeRouter>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginTop: Platform.OS === 'ios' ? 20 : STATUSBAR_HEIGHT
	},
});
