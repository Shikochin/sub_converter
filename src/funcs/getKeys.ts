export default function getKeys<K>(map: Map<K, unknown>): K[] {
    return Array.from(map.keys())
}
