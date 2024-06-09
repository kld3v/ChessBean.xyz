/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: anybody (https://sketchfab.com/anybody)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-board-and-figures-d6d3cd6d2d2a4a13bd16d0667410cf1e
Title: Chess Board And Figures
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { EffectComposer, Outline } from '@react-three/postprocessing'
import { ThreeEvent } from '@react-three/fiber'
import { BlendFunction } from 'postprocessing'
import React from 'react'

type GLTFResult = GLTF & {
	nodes: {
		Object_4: THREE.Mesh
		Object_5: THREE.Mesh
		Object_6: THREE.Mesh
		Object_8: THREE.Mesh
		Object_10: THREE.Mesh
		Object_12: THREE.Mesh
		Object_14: THREE.Mesh
		Object_16: THREE.Mesh
		Object_18: THREE.Mesh
		Object_20: THREE.Mesh
		Object_22: THREE.Mesh
		Object_24: THREE.Mesh
		Object_26: THREE.Mesh
		Object_28: THREE.Mesh
		Object_30: THREE.Mesh
		Object_32: THREE.Mesh
		Object_34: THREE.Mesh
		Object_36: THREE.Mesh
		Object_38: THREE.Mesh
		Object_40: THREE.Mesh
		Object_42: THREE.Mesh
		Object_44: THREE.Mesh
		Object_46: THREE.Mesh
		Object_48: THREE.Mesh
		Object_50: THREE.Mesh
		Object_52: THREE.Mesh
		Object_54: THREE.Mesh
		Object_56: THREE.Mesh
		Object_58: THREE.Mesh
		Object_60: THREE.Mesh
		Object_62: THREE.Mesh
		Object_64: THREE.Mesh
		Object_66: THREE.Mesh
		Object_68: THREE.Mesh
		Object_70: THREE.Mesh
	}
	materials: {
		Material_37: THREE.MeshStandardMaterial
		Material_36: THREE.MeshStandardMaterial
		['Material.001']: THREE.MeshStandardMaterial
		['Figures.Black']: THREE.MeshStandardMaterial
		['Figures.White']: THREE.MeshStandardMaterial
	}
}

interface IPositions {
	globalBoardPositions: { [key: string]: number[] }
	chessMoveToSubmitToGame: {
		piece: string
		pieceName: string
		coord: string
		readyToSubmit: boolean
		pieceColor: string
	}
	setChessMoveToSubmitToGame: any
}

export function Board(props: JSX.IntrinsicElements['group'] & IPositions) {
	const { nodes, materials } = useGLTF('./chess_board_and_figures.glb') as GLTFResult

	const placeholderRef = useRef<THREE.Mesh>(null!)

	const [globalRef, setglobalRef] = useState<MutableRefObject<THREE.Mesh>>(placeholderRef)

	const pieceTypes = ['King', 'Queen', 'BishopWhite', 'BishopBlack', 'BKnight', 'GKnight', 'HRook', 'ARook', 'APawn', 'BPawn', 'CPawn', 'DPawn', 'EPawn', 'FPawn', 'GPawn', 'HPawn']
	const colors = ['black', 'white']
	const geometryScaleTable = {
		pieces: 0.034,
		pawns: -0.025,
	}
	type IRefMap = {
		[key: string]: React.MutableRefObject<THREE.Mesh>
	}

	const [refMap] = useState<IRefMap>({})
	colors.forEach((color) => {
		pieceTypes.forEach((pieceType) => {
			refMap[`${color}${pieceType}`] = useRef<THREE.Mesh>(null!)
		})
	})

	const { globalBoardPositions, setChessMoveToSubmitToGame, chessMoveToSubmitToGame } = props

	useEffect(() => {
		if (chessMoveToSubmitToGame.pieceName === '') {
			setglobalRef(placeholderRef)
		} else {
			// Extra safe type checking
			if (chessMoveToSubmitToGame.pieceName in refMap) {
				const selectedRef = refMap[chessMoveToSubmitToGame.pieceName]
				if (selectedRef) {
					setglobalRef(selectedRef)
				} else {
					console.error('Invalid')
				}
			}
		}
	}, [chessMoveToSubmitToGame.pieceColor, chessMoveToSubmitToGame.pieceName])

	// TODO #1
	const pieces = [
		{
			name: 'blackQueen',
			meta: {
				piece: 'Q',
				pieceColor: 'b',
				geometryNumber: 8,
			},
			position: new THREE.Vector3(globalBoardPositions.blackQueen[0], 0.616, globalBoardPositions.blackQueen[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'blackKing',
			meta: {
				piece: 'K',
				pieceColor: 'b',
				geometryNumber: 10,
			},
			position: new THREE.Vector3(globalBoardPositions.blackKing[0], 0.444, globalBoardPositions.blackKing[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'blackBishopBlack',
			meta: {
				piece: 'B',
				pieceColor: 'b',
				geometryNumber: 12,
			},
			position: new THREE.Vector3(globalBoardPositions.blackBishopBlack[0], 0.302, globalBoardPositions.blackBishopBlack[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'blackBishopWhite',
			meta: {
				piece: 'B',
				pieceColor: 'b',
				geometryNumber: 12,
			},
			position: new THREE.Vector3(globalBoardPositions.blackBishopWhite[0], 0.302, globalBoardPositions.blackBishopWhite[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'blackBKnight',
			meta: {
				piece: 'N',
				pieceColor: 'b',
				geometryNumber: 14,
			},
			position: new THREE.Vector3(globalBoardPositions.blackBKnight[0], 0.304, globalBoardPositions.blackBKnight[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'blackGKnight',
			meta: {
				piece: 'N',
				pieceColor: 'b',
				geometryNumber: 14,
			},
			position: new THREE.Vector3(globalBoardPositions.blackGKnight[0], 0.304, globalBoardPositions.blackGKnight[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'blackARook',
			meta: {
				piece: 'R',
				pieceColor: 'b',
				geometryNumber: 16,
			},
			position: new THREE.Vector3(globalBoardPositions.blackARook[0], 0.246, globalBoardPositions.blackARook[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'blackHRook',
			meta: {
				piece: 'R',
				pieceColor: 'b',
				geometryNumber: 16,
			},
			position: new THREE.Vector3(globalBoardPositions.blackHRook[0], 0.246, globalBoardPositions.blackHRook[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'blackAPawn',
			meta: {
				piece: 'P',
				pieceColor: 'b',
				geometryNumber: 18,
			},
			position: new THREE.Vector3(globalBoardPositions.blackAPawn[0], 0.165, globalBoardPositions.blackAPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'blackBPawn',
			meta: {
				piece: 'P',
				pieceColor: 'b',
				geometryNumber: 20,
			},
			position: new THREE.Vector3(globalBoardPositions.blackBPawn[0], 0.165, globalBoardPositions.blackBPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'blackCPawn',
			meta: {
				piece: 'P',
				pieceColor: 'b',
				geometryNumber: 22,
			},
			position: new THREE.Vector3(globalBoardPositions.blackCPawn[0], 0.165, globalBoardPositions.blackCPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'blackDPawn',
			meta: {
				piece: 'P',
				pieceColor: 'b',
				geometryNumber: 24,
			},
			position: new THREE.Vector3(globalBoardPositions.blackDPawn[0], 0.165, globalBoardPositions.blackDPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'blackEPawn',
			meta: {
				piece: 'P',
				pieceColor: 'b',
				geometryNumber: 26,
			},
			position: new THREE.Vector3(globalBoardPositions.blackEPawn[0], 0.165, globalBoardPositions.blackEPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'blackFPawn',
			meta: {
				piece: 'P',
				pieceColor: 'b',
				geometryNumber: 28,
			},
			position: new THREE.Vector3(globalBoardPositions.blackFPawn[0], 0.165, globalBoardPositions.blackFPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'blackGPawn',
			meta: {
				piece: 'P',
				pieceColor: 'b',
				geometryNumber: 30,
			},
			position: new THREE.Vector3(globalBoardPositions.blackGPawn[0], 0.165, globalBoardPositions.blackGPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'blackHPawn',
			meta: {
				piece: 'P',
				pieceColor: 'b',
				geometryNumber: 32,
			},
			position: new THREE.Vector3(globalBoardPositions.blackHPawn[0], 0.165, globalBoardPositions.blackHPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'whiteQueen',
			meta: {
				piece: 'Q',
				pieceColor: 'w',
				geometryNumber: 8,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteQueen[0], 0.616, globalBoardPositions.whiteQueen[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'whiteKing',
			meta: {
				piece: 'K',
				pieceColor: 'w',
				geometryNumber: 10,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteKing[0], 0.444, globalBoardPositions.whiteKing[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'whiteBishopBlack',
			meta: {
				piece: 'B',
				pieceColor: 'w',
				geometryNumber: 12,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteBishopBlack[0], 0.302, globalBoardPositions.whiteBishopBlack[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'whiteBishopWhite',
			meta: {
				piece: 'B',
				pieceColor: 'w',
				geometryNumber: 12,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteBishopWhite[0], 0.302, globalBoardPositions.whiteBishopWhite[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'whiteBKnight',
			meta: {
				piece: 'N',
				pieceColor: 'w',
				geometryNumber: 14,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteBKnight[0], 0.304, globalBoardPositions.whiteBKnight[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'whiteGKnight',
			meta: {
				piece: 'N',
				pieceColor: 'w',
				geometryNumber: 14,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteGKnight[0], 0.304, globalBoardPositions.whiteGKnight[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'whiteARook',
			meta: {
				piece: 'R',
				pieceColor: 'w',
				geometryNumber: 16,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteARook[0], 0.246, globalBoardPositions.whiteARook[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'whiteHRook',
			meta: {
				piece: 'R',
				pieceColor: 'w',
				geometryNumber: 16,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteHRook[0], 0.246, globalBoardPositions.whiteHRook[1]),
			scale: geometryScaleTable.pieces,
		},
		{
			name: 'whiteAPawn',
			meta: {
				piece: 'P',
				pieceColor: 'w',
				geometryNumber: 18,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteAPawn[0], 0.165, globalBoardPositions.whiteAPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'whiteBPawn',
			meta: {
				piece: 'P',
				pieceColor: 'w',
				geometryNumber: 20,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteBPawn[0], 0.165, globalBoardPositions.whiteBPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'whiteCPawn',
			meta: {
				piece: 'P',
				pieceColor: 'w',
				geometryNumber: 22,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteCPawn[0], 0.165, globalBoardPositions.whiteCPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'whiteDPawn',
			meta: {
				piece: 'P',
				pieceColor: 'w',
				geometryNumber: 24,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteDPawn[0], 0.165, globalBoardPositions.whiteDPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'whiteEPawn',
			meta: {
				piece: 'P',
				pieceColor: 'w',
				geometryNumber: 26,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteEPawn[0], 0.165, globalBoardPositions.whiteEPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'whiteFPawn',
			meta: {
				piece: 'P',
				pieceColor: 'w',
				geometryNumber: 28,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteFPawn[0], 0.165, globalBoardPositions.whiteFPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'whiteGPawn',
			meta: {
				piece: 'P',
				pieceColor: 'w',
				geometryNumber: 30,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteGPawn[0], 0.165, globalBoardPositions.whiteGPawn[1]),
			scale: geometryScaleTable.pawns,
		},
		{
			name: 'whiteHPawn',
			meta: {
				piece: 'P',
				pieceColor: 'w',
				geometryNumber: 32,
			},
			position: new THREE.Vector3(globalBoardPositions.whiteHPawn[0], 0.165, globalBoardPositions.whiteHPawn[1]),
			scale: [geometryScaleTable.pawns, 0.025, 0.025],
		},
	]

	const handlePieceClick = (piece: string, name: string, pieceColor: string) => (e: ThreeEvent<MouseEvent>) => {
		e.stopPropagation()
		setChessMoveToSubmitToGame({
			piece: piece,
			pieceName: name,
			coord: '',
			readyToSubmit: false,
			pieceColor: pieceColor,
		})
	}

	// TODO #2
	const renderPieces = pieces.map((p, index) => (
		<mesh
			key={index}
			ref={refMap[p.name]}
			castShadow
			receiveShadow
			name={p.name}
			//@ts-ignore
			geometry={nodes[`Object_${p.meta.geometryNumber}`].geometry}
			material={materials[`Figures.${p.meta.pieceColor === 'w' ? 'White' : 'Black'}`]}
			onClick={handlePieceClick(p.meta.piece, p.name, p.meta.pieceColor)}
			position={p.position}
			rotation={[Math.PI / 2, 0, p.meta.pieceColor === 'w' ? 0 : -Math.PI]}
			//@ts-ignore
			scale={p.meta.piece === 'P' ? [geometryScaleTable.pawns, 0.025, 0.025] : p.scale}
		/>
	))

	return (
		<>
			<EffectComposer
				multisampling={8}
				autoClear={false}>
				{/* <Bloom mipmapBlur /> */}
				<Outline
					selection={[globalRef]}
					edgeStrength={50} // the edge strength
					pulseSpeed={0} // a pulse speed. A value of zero disables the pulse effect
					blur
					xRay={false} // so you can't see the outline through other pieces
					blendFunction={BlendFunction.ALPHA} // set this to BlendFunction.ALPHA for dark outlines
					visibleEdgeColor={chessMoveToSubmitToGame.pieceColor === 'w' ? 0xffffff : 0x000000} // the color of visible edges
				/>
			</EffectComposer>
			<group
				{...props}
				dispose={null}>
				<group
					rotation={[-Math.PI / 2, 0, -Math.PI]}
					scale={2}
					position={[0, -0.1, 0]}>
					<group rotation={[Math.PI / 2, 0, 0]}>
						<group
							position={[0, -0.043, 0]}
							scale={0.025}>
							<mesh
								castShadow
								receiveShadow
								geometry={nodes.Object_4.geometry}
								material={materials.Material_37}
							/>
							<mesh
								castShadow
								receiveShadow
								geometry={nodes.Object_5.geometry}
								material={materials.Material_36}
							/>
							<mesh
								ref={placeholderRef!}
								castShadow
								receiveShadow
								geometry={nodes.Object_6.geometry}
								material={materials['Material.001']}
							/>
							<mesh ref={placeholderRef!}>
								<boxGeometry args={[0, 0, 0]} />
							</mesh>
						</group>
						{renderPieces}
					</group>
				</group>
			</group>
		</>
	)
}

export default Board

useGLTF.preload('/chess_board_and_figures.glb')
