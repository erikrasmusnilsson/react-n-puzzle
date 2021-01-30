const scramble = (arr) => {
    for (let i = 0; i < arr.length * 3; i++) {
        const a = Math.floor(Math.random() * Math.floor(arr.length));
        const b = Math.floor(Math.random() * Math.floor(arr.length));
        if (a === b) continue;
        swap(a, b, arr);
    }
}

const swap = (a, b, arr) => {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

export { scramble, swap };