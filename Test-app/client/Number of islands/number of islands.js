
const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

const grid2 = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
]

const numIslands = function (grid) {
    const visited = grid.map((row) => row.map(el => false));
    let numOfIslands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (checkBorders(i, j, grid, visited)) {
                numOfIslands++;
            };
        }
    }
    return numOfIslands;
}

const checkBorders = (i, j, grid, visited) => {
    let islandSize = 0;
    const stack = [[i, j]];
    while (stack.length) {
        const currNode = stack.pop();
        const [i, j] = currNode;
        if (visited[i][j]) {
            continue
        }

        visited[i][j] = true;

        if (grid[i][j] === '0') {
            continue
        }

        islandSize++;
        const neighboursStack = getNeighbours(i, j, grid, visited);
        stack.push(...neighboursStack);
    }

    return islandSize > 0 ? true : false;
}

const getNeighbours = (i, j, grid, visited) => {
    const neighboursStack = [];
    if (i > 0 && !visited[i - 1][j]) {
        neighboursStack.push([i - 1, j]);
    }

    if (i < grid.length - 1 && !visited[i + 1][j]) {
        neighboursStack.push([i + 1, j]);
    }

    if (j > 0 && !visited[i][j - 1]) {
        neighboursStack.push([i, j - 1]);
    }

    if (j < grid[0].length - 1 && !visited[i][j + 1]) {
        neighboursStack.push([i, j + 1]);
    }
    return neighboursStack;
}
