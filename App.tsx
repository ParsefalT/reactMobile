import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors, Gaps } from './shared/tokens';
import { Button } from './shared/Button/Button';

export default function App() {
	const width = Dimensions.get('window').width;
	const height = Dimensions.get('window').height;

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.logo} source={require('./assets/wtf.gif')} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="email" />
					<Input isPassword placeholder="password" />
					<Button text="sign in" />
				</View>
				<Text>sign up</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
		backgroundColor: Colors.black,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	logo: {},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
});
