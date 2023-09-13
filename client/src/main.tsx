import ReactDOM from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Canvas
		shadows
		camera={{
			fov: 45,
			near: 0.1,
			far: 2000,
			position: [0, 8, 14],
		}}
	>
		<Experience />
	</Canvas>
)
