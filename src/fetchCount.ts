interface FetchCounteCallback {
    (count: number) : void
}

export default function fetchCount(cb: FetchCounteCallback) {
    cb(0)
}