function determinant(m) {
    switch (m.length) {
        case 1:
            return m[0][0];
        case 2:
            return m[0][0] * m[1][1] - m[0][1] * m[1][0];
        default:
            let deter = 0;
            for (let i = 0; i < m.length; i++) {

                let iMinor = []

                for (let y = 1; y < m.length; y++) {
                    let row = m[y].slice();
                    row.splice(i, 1);
                    iMinor.push(row);
                }
                if (i % 2 == 0) {
                    deter += m[0][i] * determinant(iMinor);
                } else {
                    deter -= m[0][i] * determinant(iMinor);
                }
            }
            return deter;
    }
};

console.log(determinant([[2,4,2],[3,1,1],[1,2,0]]));