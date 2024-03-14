export default function countBy(arr) {
    return arr.reduce((acc, cur) => {
        if (acc[cur])
            acc[cur] += 1;
        else
            acc[cur] = 1;
        return acc;
    }, {});
}
