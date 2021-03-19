import React,{useRef} from 'react'
import {Canvas,useFrame,useLoader} from 'react-three-fiber'
import * as THREE from 'three';
import Roboto from '../texts/roboto.json';
import './test.css';
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
const Test = () => {

    const Sphere =()=>{
        const mesh=useRef(null);
        const font = new THREE.FontLoader().parse(Roboto);
      
        const textOptions = {
            font,
            size: 3,
            height: 1
          };
          useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y+=0.01))
          return(
            <mesh ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
              <meshStandardMaterial attach='material'  color={0x003DD2FF}    />
              
           </mesh>
          )
    }
   
    return (
        <div className="sphere">
            <Canvas colorManagement camera={{position:[-5,2,10],fov:60}}>
                <ambientLight intensity={0.3}/>
                <directionalLight position={[0,10,0]} intensity={1} shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10} />
               
                <pointLight position={[6,-5,10]} intensity={0.5} />
                <Sphere />
                <OrbitControls />
                
            </Canvas>
        </div>
    )
}

export default Test
