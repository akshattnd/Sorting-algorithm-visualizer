const bubbleSort = (array: number[]): [number[], number[][]] => {
    const arr: number[] = [...array];
    const animations: number[][] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            animations.push([j, j + 1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                animations.push([...arr]);
                flag = true;
            }
        }
        if (!flag) break;
    }
    return [arr, animations];
}
const selectionSort = (array: number[]): [number[], number[][]] => {
    const arr: number[] = [...array];
    const animations: number[][] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            animations.push([minIndex, j]);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        animations.push([...arr]);
    }
    return [arr, animations];
}
const insertionSort = (array: number[]): [number[], number[][]] => {
    const arr: number[] = [...array];
    const animations: number[][] = [];
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];
        while (j >= 0 && arr[j] > key) {
            animations.push([j, j + 1]);
            arr[j + 1] = arr[j];
            animations.push([...arr]);
            j--;
        }
        arr[j + 1] = key;
        animations.push([...arr]);
    }
    return [arr, animations];
}
const mergeSort = (array: number[]): [number[], number[][]] => {
    const arr: number[] = [...array];
    const animations: number[][] = [];
    const merge = (arr: number[], l: number, m: number, r: number) => {
        const n1 = m - l + 1;
        const n2 = r - m;
        const L = new Array(n1);
        const R = new Array(n2);
        for (let i = 0; i < n1; i++) {
            L[i] = arr[l + i];
        }
        for (let j = 0; j < n2; j++) {
            R[j] = arr[m + 1 + j];
        }
        let i = 0;
        let j = 0;
        let k = l;
        while (i < n1 && j < n2) {
            animations.push([l + i, m + 1 + j]);
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            animations.push([...arr]);
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            animations.push([...arr]);
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            animations.push([...arr]);
            j++;
            k++;
        }
    }
    const mergeSortHelper = (arr: number[], l: number, r: number) => {
        if (l >= r) {
            return;
        }
        const m = Math.floor((l + r) / 2);
        mergeSortHelper(arr, l, m);
        mergeSortHelper(arr, m + 1, r);
        merge(arr, l, m, r);
    }
    mergeSortHelper(arr, 0, arr.length - 1);
    return [arr, animations];

}
const quickSort = (array: number[]): [number[], number[][]] => {
    const arr: number[] = [...array];
    const animations: number[][] = [];
    const partition = (arr: number[], low: number, high: number): number => {
        const pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            animations.push([j, high]);
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                animations.push([...arr]);
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        animations.push([...arr]);
        return i + 1;
    }
    const quickSortHelper = (arr: number[], low: number, high: number) => {
        if (low < high) {
            const pi = partition(arr, low, high);
            quickSortHelper(arr, low, pi - 1);
            quickSortHelper(arr, pi + 1, high);
        }
    }
    quickSortHelper(arr, 0, arr.length - 1);
    return [arr, animations];
}
export { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort };
