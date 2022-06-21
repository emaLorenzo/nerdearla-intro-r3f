import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export const Spaceship = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf'
  );
  return (
    <group ref={group} {...props} dispose={null} rotation-y={0}>
      <mesh geometry={nodes.Cube005.geometry} material={materials.Mat0} />
      <mesh geometry={nodes.Cube005_1.geometry} material={materials.Mat1} />
      <mesh geometry={nodes.Cube005_2.geometry} material={materials.Mat2} />
      <mesh geometry={nodes.Cube005_3.geometry} material={materials.Window_Frame} />
      <mesh geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
      <mesh geometry={nodes.Cube005_5.geometry} material={materials.Mat3} />
      <mesh geometry={nodes.Cube005_6.geometry} material={materials.Window} />
    </group>
  );
};

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf'
);
