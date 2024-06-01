const fakeData = {
    '2024-02-22': { neg: 0.10, pos: 0.60, nat: 0.30 },
    '2024-02-23': { neg: 0.20, pos: 0.50, nat: 0.30 },
    '2024-02-24': { neg: 0.15, pos: 0.65, nat: 0.20 },
    '2024-02-25': { neg: 0.12, pos: 0.68, nat: 0.20 },
    '2024-02-26': { neg: 0.18, pos: 0.60, nat: 0.22 },
    '2024-02-27': { neg: 0.10, pos: 0.70, nat: 0.20 },
};

const fetchSentimentData = async () => {
    return fakeData;
};

export default fetchSentimentData;
