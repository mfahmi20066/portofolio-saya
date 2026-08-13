import { useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const SURFACE_COUNT = 800
const NODE_COUNT = 90
const R = 2.4

function makeSurface() {
  const positions = new Float32Array(SURFACE_COUNT * 3)
  const colors = new Float32Array(SURFACE_COUNT * 3)
  const ash = new THREE.Color('#8B8B8E')
  const lime = new THREE.Color('#A3E635')
  for (let i = 0; i < SURFACE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = R + (Math.random() - 0.5) * 0.06
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.cos(phi)
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    const c = Math.random() < 0.18 ? lime : ash
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }
  return { positions, colors }
}

function makeNodes() {
  const positions = new Float32Array(NODE_COUNT * 3)
  const speeds = new Float32Array(NODE_COUNT)
  const radii = new Float32Array(NODE_COUNT)
  const angles = new Float32Array(NODE_COUNT)
  const inclinations = new Float32Array(NODE_COUNT)
  for (let i = 0; i < NODE_COUNT; i++) {
    speeds[i] = 0.12 + Math.random() * 0.35
    radii[i] = 2.95 + Math.random() * 0.6
    angles[i] = Math.random() * Math.PI * 2
    inclinations[i] = Math.acos(2 * Math.random() - 1)
    const a = angles[i]
    const inc = inclinations[i]
    positions[i * 3] = radii[i] * Math.sin(inc) * Math.cos(a)
    positions[i * 3 + 1] = radii[i] * Math.cos(inc)
    positions[i * 3 + 2] = radii[i] * Math.sin(inc) * Math.sin(a)
  }
  return { positions, speeds, radii, angles, inclinations }
}

function DataGlobe({ reduce }) {
  const group = useRef(null)
  const inner = useRef(null)
  const ringA = useRef(null)
  const ringB = useRef(null)
  const dashed = useRef(null)
  const sweep = useRef(null)
  const nodes = useRef(null)

  const { viewport, size } = useThree()

  useLayoutEffect(() => {
    const extent = 7.4
    const fit = Math.min(
      1,
      (viewport.width * 0.92) / extent,
      (viewport.height * 0.85) / extent,
    )
    group.current?.scale.setScalar(fit)
  }, [viewport.width, viewport.height, size])

  const surface = useMemo(makeSurface, [])
  const nodeData = useMemo(makeNodes, [])
  const dashedCircle = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2
      pts.push(Math.cos(a) * 3.1, 0, Math.sin(a) * 3.1)
    }
    return new Float32Array(pts)
  }, [])

  useLayoutEffect(() => {
    dashed.current?.computeLineDistances()
  }, [])

  useFrame((state, delta) => {
    const g = group.current
    if (reduce) return
    const t = state.clock.elapsedTime
    g.rotation.y += delta * 0.1
    g.rotation.x += (state.pointer.y * 0.22 - g.rotation.x) * 0.04
    g.rotation.z += (state.pointer.x * -0.08 - g.rotation.z) * 0.04

    inner.current.rotation.y -= delta * 0.25
    inner.current.rotation.x += delta * 0.15

    ringA.current.rotation.x += delta * 0.45
    ringA.current.rotation.z += delta * 0.2
    ringB.current.rotation.z -= delta * 0.35
    ringB.current.rotation.x += delta * 0.18
    dashed.current.rotation.y += delta * 0.22
    dashed.current.rotation.x += delta * 0.12

    sweep.current.position.y = Math.sin(t * 0.7) * 2.3
    sweep.current.material.opacity = 0.09 + 0.05 * Math.sin(t * 1.6)

    const { positions, speeds, radii, angles, inclinations } = nodeData
    for (let i = 0; i < NODE_COUNT; i++) {
      angles[i] += delta * speeds[i]
      const a = angles[i]
      const inc = inclinations[i]
      const r = radii[i]
      positions[i * 3] = r * Math.sin(inc) * Math.cos(a)
      positions[i * 3 + 1] = r * Math.cos(inc)
      positions[i * 3 + 2] = r * Math.sin(inc) * Math.sin(a)
    }
    nodes.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[surface.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[surface.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <mesh>
        <sphereGeometry args={[R, 18, 14]} />
        <meshBasicMaterial color="#A3E635" wireframe transparent opacity={0.16} />
      </mesh>

      <mesh ref={inner}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#6E8F1F" wireframe transparent opacity={0.35} />
      </mesh>

      <mesh ref={sweep} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.05, 2.75, 96]} />
        <meshBasicMaterial
          color="#A3E635"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={ringA}>
        <torusGeometry args={[2.75, 0.01, 6, 100]} />
        <meshBasicMaterial
          color="#A3E635"
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={ringB}>
        <torusGeometry args={[3.05, 0.008, 6, 100]} />
        <meshBasicMaterial
          color="#8B8B8E"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <line ref={dashed}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dashedCircle, 3]} />
        </bufferGeometry>
        <lineDashedMaterial color="#A3E635" dashSize={0.09} gapSize={0.07} transparent opacity={0.6} />
      </line>

      <points ref={nodes}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodeData.positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#A3E635"
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

export default function HeroScene({ reduce }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6.4], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <DataGlobe reduce={reduce} />
      </Canvas>
    </div>
  )
}