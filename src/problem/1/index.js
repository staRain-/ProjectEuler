module.exports = function ({factors, limit}) {
    return sum_of_multiples_up_to({limit: limit-1})({factors})
        - sum_of_multiples_up_to({limit: limit-1})({factors: map_of_all_pair({operation: product})({list: factors})});
}

function sum_of_multiples_up_to({limit}) {
    return function ({factors}) {
        return factors.reduce(function (sum, factor) {
            return sum + sum_of_multiple({factor, limit})
        }, 0);
    }
}

function map_of_all_pair({operation}) {
    return function ({list}) {
        return list.flatMap(function (factor_a, index) {
            return list.slice(index + 1).map(function (factor_b) {
                return operation(factor_a, factor_b);
            });
        });
    }
}

function product(a, b) {
    return a * b;
}

function number_of_multiple({factor, limit}) {
    return Math.floor(limit / factor);
}

function arithmetic_sum({limit}) {
    return (limit * (limit + 1)) / 2;
}

function sum_of_multiple({factor, limit}) {
    return factor * arithmetic_sum({limit: number_of_multiple({factor, limit})});
}
