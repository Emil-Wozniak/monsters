export interface IMonster {
    id: number,
    name: string,
    address: {
        geo: {
            lat: number,
            lng: number
        }
    }
}