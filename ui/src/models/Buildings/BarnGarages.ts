export interface BarnGarages {
    type: string,
    size: string,
    windows?: {
        amt: Number,
        size: string,
        side: string
    },
    doors?: {
        amt: Number,
        size: string,
        side: string
    },
    garageDoors?: {
        amt: Number,
        size: string,
        side: string
    },
    leanTo?: {
        amt: Number,
        size: string,
    },
}