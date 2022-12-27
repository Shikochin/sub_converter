export default function getFirstKey<K, V>(
    value: V,
    map: Map<K, V>
): K | undefined {
    for (const [k, v] of map) {
        if (v === value) {
            return k
        }
    }
}
