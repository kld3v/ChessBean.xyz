import { Html, useProgress } from '@react-three/drei'

export const Loader = () => {
	const { progress } = useProgress()

	return (
		<Html
			center
			wrapperClass='loading'
		>
			<h2>{Math.floor(progress)}%</h2>
			<img
				src='./spinner.gif'
				alt='loading'
			/>
		</Html>
	)
}
