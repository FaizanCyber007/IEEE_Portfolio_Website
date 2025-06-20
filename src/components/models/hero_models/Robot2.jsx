/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\robot2.glb 
*/

import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes } = useGLTF('/models/robot2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 20.063, -20.064]} rotation={[3.142, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh geometry={nodes.Object_3.geometry} material={nodes.Object_3.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/robot2.glb')
