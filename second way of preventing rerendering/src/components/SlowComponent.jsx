const waitingForSomething = (ms) => {
    const start = Date.now();
    let now = start;

    while (now - start < ms) {
        now = Date.now();
    }
};

const SlowComponent = () => {
    waitingForSomething(1000);
    return null;
};

export default SlowComponent;
