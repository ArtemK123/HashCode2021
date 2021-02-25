function createOutput(data) {
    let solution = '';
    const separator = '\n';
    const I = data.length;
    solution += `${I}${separator}`;
    data.forEach(value => {
        solution += `${value.id}${separator}${value.lights.length}${separator}`;
        value.lights.forEach(tl => {
            solution += `${tl.street} ${tl.T}${separator}`;
        });
    });
    return solution.trim();
}

exports.createOutput = createOutput;