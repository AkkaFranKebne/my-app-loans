export function addTest(test: any) {
    return {
        type: 'ADD_TEST',
        payload: test
    }
}