import * as THREE from 'three';
import { BufferGeometry, Material, Mesh, Object3DEventMap } from 'three';

export type TMesh = Mesh<BufferGeometry, Material | Material[], Object3DEventMap>;

export type TMeterial = { [p: string]: THREE.Material | THREE.Material[] };
