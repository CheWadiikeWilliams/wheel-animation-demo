
function toDegrees (angle:number) {
    return angle * (180 / Math.PI)
}

function toRadians (angle:number) {
    return angle * (Math.PI / 180)
}

function getCoordsFromAngle(
    angle: number,
    radius: number
):{
    x: number,
    y: number
} {
    const x = Math.cos(toRadians(angle)) * radius
    const y = Math.sin(toRadians(angle)) * radius
    return {x, y}
};

export function TransformAlongCircle({
    rotation,
    radius
}:{
    rotation: number,
    radius: number
}):object {
    return {
        transform: `rotate(${rotation}deg)
            translate(${radius}px)
            rotate(-${rotation}deg)`
    }
};

export function TransformToXY(
    angle: number,
    radius: number
):object {
    const { x, y } = getCoordsFromAngle(angle, radius)
    return {
        transform: `translate(${x}px, ${y}px)`
    }
};