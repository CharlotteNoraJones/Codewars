

class ConnectFour {
    // Empty spaces are marked with X. 
    // Filled spaces are marked with R or Y. 
    #cols = [];
    #rows = [];
    #diagonalsLeftLean = [];
    #diagonalsRightLean = [];
    #winReq = 4;

    constructor(width = 7, height = 6, winReq = 4) {
        // winReq = The amount of adjacent pieces required to win the game.
        // Position 0, 0 is in the top left of the board. 
        this.#winReq = winReq;

        let board = Array.from({ length: height }, () => Array.from({ length: width }, () => new Slot()));

        board[0][0].content = "R";

        this.#createCols(board);
        this.#createRows(board);
        this.#createDiagonals(board);
    }

    #createCols(board) {

    }

    #createRows(board) {
        board.forEach(row => {
            this.#rows.push(new SlotGroup(row));
        });

        console.log(this.#rows[0].toString());
    }

    #createDiagonals(board) {
    }

    drop(order) {
        /* 
        * Takes in order in the format columnletter_playercolor.
        * Where A = column 0, B = column 1, etc. 
        * Example: B_Yellow or A_Red
        * Assumes that the column is not full. 
        */
        let orderArr = order.split("_");
        this.#cols[this.#getAlphabetNumber(orderArr[0])].drop(order[1].charAt(0));
    }

    #getAlphabetNumber(c) {
        // Takes in a single alphabetic char, returns it's place in the alphabet.
        // a = 0, b = 1, c = 2
        return c.toLowerCase().charCodeAt(0) - 97;
    }

    toString() {
        return this.#rows.map(row => { row.toString() }).join("\n");
    }

}

class SlotGroup {
    #slots = [];

    constructor(slots) {
        // slots is an array of Slots
        this.#slots = slots;
    }

    checkWin(playerPiece, winReq = 4) {
        // Returns true if the row has winReq adjacent slots filled with playerPiece. 
        if (winReq > this.#slots.length) {
            return false;
        }

        for (let i = 0; i < this.#slots.length - winReq; i++) {
            if (this.#slots.slice(i, i + winReq).every(slot => { slot.content === playerPiece })) {
                return true;
            }
        }

        return false;
    }

    getSlot(i) {
        return this.#slots[i];
    }

    toString() {
        return this.#slots;
    }
}

class Column extends SlotGroup {

    #slots;

    #getlowestEmptyIndex() {
        let firstFilledIndex = this.#slots.findIndex(slot => { slot.content != null });
        return firstFilledIndex == -1 ? this.#slots.length - 1 : firstFilledIndex - 1;
    }

    drop(playerPiece) {
        // Playerpiece should be R or Y
        this.#slots[this.#getlowestEmptyIndex()].content = playerPiece;
    }
}

class Slot {
    content = null;

    get content() {
        return this.content;
    }

    set content(piece) {
        // The content should only ever be R, Y, or null
        if (piece === "R" || piece === "Y") {
            this.content = piece;
        }
    }

    isFilled() {
        return this.content != null;
    }

    toString() {
        // Returns an empty space if a piece has not been inserted. 
        return (this.content == null ? "X" : this.content)
    }
}

console.log(whoIsWinner([
    "A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "G_Red",
    "B_Yellow"]));

function whoIsWinner(piecesPositionList) {
    let testBoard = new ConnectFour();
    console.log(testBoard.toString());
    return "Draw";
    // return "Red", "Yellow" or "Draw"
}
