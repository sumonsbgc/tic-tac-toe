export function calculateWinner(marks, size) {
    const rows = new Array(size).fill(0);
    const cols = new Array(size).fill(0);
    const diagonal = new Array(2).fill(0);

    if (marks && size) {
        // loop over each cell of the board
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                // get the element via index calculation y * width + x
                const mark = marks[row * size + col];

                // increment for player one
                if (mark === "X") {
                    rows[row]++;
                    cols[col]++;
                } else if (mark === "O") {
                    rows[row]--;
                    cols[col]--;
                }

                // check diagonal
                if (row == col) {
                    if (mark === "X") {
                        diagonal[0]++;
                    } else if (mark === "O") {
                        diagonal[0]--;
                    }
                }

                if (row === size - col - 1) {
                    if (mark === "X") {
                        diagonal[1]++;
                    } else if (mark === "O") {
                        diagonal[1]--;
                    }
                }
            }
        }

        // check if any of the rows or columns are completed by either player
        for (let i = 0; i < size; i++) {
            if (rows[i] === size || cols[i] === size) {
                return "X";
            }

            if (rows[i] === -size || cols[i] === -size) {
                return "O";
            }

            // if (rows[i] === size || cols[i] === size) return "X";
            // else if (rows[i] === -size || cols[i] === -size) return "O";
        }

        // Calculate diagonallly
        if (diagonal[0] === size || diagonal[1] === size) {
            return "X";
        }

        if (diagonal[0] === -size || diagonal[1] === -size) {
            return "O";
        }
    }

    return false;
}
