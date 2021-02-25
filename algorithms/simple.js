function simple(data) {
    const { I, streets, cars } = data;
    return [...Array(I).keys()].map(id => {
        const lights = streets.reduce((prev, curr) => {
            return curr.B === id || curr.E === id ?
                [...prev, {
                    street: curr.name,
                    T: 1
                }] :
                prev
        }, []);
        return {
            id,
            lights
        };
    });
}

exports.simple = simple;