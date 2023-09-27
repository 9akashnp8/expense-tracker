export function calcRemainingBalance(
    initial: number,
    change: number,
    is_expense: boolean,
) {
    const operation = is_expense ? 1 : -1;
    return initial - change * operation;
}
