import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Colors, Radius } from '../tokens';
import { useState } from 'react';
import EyeOpenIcon from '../../assets/icons/eye-open';
import EyeClosedIcon from '../../assets/icons/eye-closed';

export function Input({ isPassword, ...props }: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	return (
		<View>
			<TextInput
				{...props}
				style={styles.input}
				placeholderTextColor={Colors.gray}
				secureTextEntry={isPassword && !isPasswordVisible}
			/>
			{isPassword && (
				<Pressable style={styles.eyeIcon} onPress={() => setIsPasswordVisible((state) => !state)}>
					{isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		paddingVertical: 0,
		borderRadius: Radius.r10,
		fontSize: 16,
		color: Colors.gray,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 25,
		paddingVertical: 20,
	},
});
